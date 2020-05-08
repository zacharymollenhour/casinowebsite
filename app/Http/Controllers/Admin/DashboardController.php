<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AffiliateCommission;
use App\Models\Game;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    private $cacheTtl = 30*60; // 30 minutes

    public function users()
    {
        $usersCount = User::all()->count();

        $days = collect()->pad(7, 0);

        // user sign ups grouped by difference in days between now and sign up date
        $signUps = Cache::remember('admin.dashboard.users.user_base', $this->cacheTtl, function () {
            return User::selectRaw('ABS(DATEDIFF(created_at, CURDATE())) AS diff, COUNT(*) AS signup_count')
                ->where('created_at', '>', Carbon::now()->subDays(6))
                ->groupBy('diff')
                ->orderBy('diff', 'asc')
                ->get()
                ->keyBy('diff')
                ->map(function ($item) {
                    return $item['signup_count'];
                });
        });

        $carry = $usersCount;

        // cumulative user base growth over last 7 days
        $userBaseByDay = $days->map(function ($item, $key) use ($signUps, &$carry) {
            if ($key > 0) {
                $carry = $carry - ($signUps[$key-1] ?? 0);
            }

            return  $carry;
        })->reverse()->values();

        $signUpsLastMonth = Cache::remember('admin.dashboard.users.sign_ups_last_month', $this->cacheTtl, function () {
            return User::where('created_at', '>=', Carbon::now()->subMonth(1)->startOfMonth())
                ->where('created_at', '<', Carbon::now()->startOfMonth())
                ->count();
        });

        $signUpsThisMonth = Cache::remember('admin.dashboard.users.sign_ups_this_month', $this->cacheTtl, function () {
            return User::where('created_at', '>=', Carbon::now()->startOfMonth())->count();
        });

        $signUpsByMethod = Cache::remember('admin.dashboard.users.sign_ups_by_method', $this->cacheTtl, function () {
            return User::selectRaw('IFNULL(social_profiles.provider_name, "email") AS source, COUNT(*) AS count')
                ->leftJoin('social_profiles', 'social_profiles.user_id', '=', 'users.id')
                ->groupBy('source')
                ->orderBy('count', 'desc')
                ->get()
                ->map
                ->setAppends([]);
        });

        return response()->json([
            'count'                 => $usersCount,
            'user_base_by_day'      => $userBaseByDay,
            'sign_ups_last_month'   => $signUpsLastMonth,
            'sign_ups_this_month'   => $signUpsThisMonth,
            'sign_ups_by_method'    => $signUpsByMethod,
        ]);
    }

    public function affiliates()
    {
        $commissionsByWeek = Cache::remember('admin.dashboard.affiliates.commissions_by_week', $this->cacheTtl, function () {
            $commissions = AffiliateCommission::selectRaw('SUM(amount) AS commissions_total, WEEK(created_at, 1) AS week_number')
                ->where('created_at', '>=', Carbon::now()->subWeeks(7)->startOfWeek())
                ->groupBy('week_number')
                ->orderBy('week_number', 'asc')
                ->get()
                ->keyBy('week_number')
                ->map
                ->commissions_total;

            $commissionsByWeek = collect();
            for ($i = 7; $i >= 0; $i--) {
                $weekNumber = Carbon::now()->subWeek($i)->weekOfYear;
                $commissionsByWeek->put($weekNumber, $commissions->has($weekNumber) ? $commissions->get($weekNumber) : 0);
            }

            return $commissionsByWeek->values();
        });

        $referredLastMonth = Cache::remember('admin.dashboard.affiliates.referred_last_month', $this->cacheTtl, function () {
            return User::where('created_at', '>=', Carbon::now()->subMonth(1)->startOfMonth())
                ->where('created_at', '<', Carbon::now()->startOfMonth())
                ->whereNotNull('referrer_id')
                ->count();
        });

        $referredThisMonth = Cache::remember('admin.dashboard.affiliates.referred_this_month', $this->cacheTtl, function () {
            return User::where('created_at', '>=', Carbon::now()->startOfMonth())->whereNotNull('referrer_id')->count();
        });

        $pendingCommissionsTotal = Cache::remember('admin.dashboard.affiliates.pending_commissions_total', $this->cacheTtl, function () {
            return (float) AffiliateCommission::pending()->sum('amount');
        });

        $approvedCommissionsTotal = Cache::remember('admin.dashboard.affiliates.approved_commissions_total', $this->cacheTtl, function () {
            return (float) AffiliateCommission::approved()->sum('amount');
        });

        $rejectedCommissionsTotal = Cache::remember('admin.dashboard.affiliates.rejected_commissions_total', $this->cacheTtl, function () {
            return (float) AffiliateCommission::rejected()->sum('amount');
        });

        $commissionsByType = Cache::remember('admin.dashboard.affiliates.commissions_by_type', $this->cacheTtl, function () {
            return AffiliateCommission::select(
                    'type',
                    DB::raw('COUNT(id) AS commissions_count'),
                    DB::raw('SUM(amount) AS commissions_total')
                )
                ->groupBy('type')
                ->orderBy('type')
                ->get()
                ->map
                ->setAppends(['title']);
        });

        return response()->json([
            'commissions_by_week'           => $commissionsByWeek,
            'commissions_by_type'           => $commissionsByType,
            'referred_last_month'           => $referredLastMonth,
            'referred_this_month'           => $referredThisMonth,
            'pending_commissions_total'     => $pendingCommissionsTotal,
            'approved_commissions_total'    => $approvedCommissionsTotal,
            'rejected_commissions_total'    => $rejectedCommissionsTotal,
        ]);
    }

    public function games() {
        $betsLastMonth = Cache::remember('admin.dashboard.games.bets_last_month', $this->cacheTtl, function () {
            return Game::completed()->where('created_at', '>=', Carbon::now()->subMonth(1)->startOfMonth())
                ->where('created_at', '<', Carbon::now()->startOfMonth())
                ->count();
        });

        $betsThisMonth = Cache::remember('admin.dashboard.games.bets_this_month', $this->cacheTtl, function () {
            return Game::completed()->where('created_at', '>=', Carbon::now()->startOfMonth())->count();
        });

        $houseEdgeLastMonth = Cache::remember('admin.dashboard.games.house_edge_last_month', $this->cacheTtl, function () {
            return Game::completed()->selectRaw('100 * (1 - SUM(win) / SUM(bet)) AS house_edge')
                ->where('created_at', '>=', Carbon::now()->subMonth(1)->startOfMonth())
                ->where('created_at', '<', Carbon::now()->startOfMonth())
                ->first()->house_edge;
        });

        $houseEdgeThisMonth = Cache::remember('admin.dashboard.games.house_edge_this_month', $this->cacheTtl, function () {
            return Game::completed()->selectRaw('100 * (1 - SUM(win) / SUM(bet)) AS house_edge')
                ->where('created_at', '>=', Carbon::now()->startOfMonth())
                ->first()->house_edge;
        });

        $wageredByWeek = Cache::remember('admin.dashboard.games.wagered_by_week', $this->cacheTtl, function () {
            $wagered = Game::completed()->selectRaw('SUM(bet) AS bet_total, WEEK(created_at, 1) AS week_number')
                ->where('created_at', '>=', Carbon::now()->subWeeks(7)->startOfWeek())
                ->groupBy('week_number')
                ->orderBy('week_number', 'asc')
                ->get()
                ->keyBy('week_number')
                ->map
                ->bet_total;

            $wageredByWeek = collect();
            for ($i = 7; $i >= 0; $i--) {
                $weekNumber = Carbon::now()->subWeek($i)->weekOfYear;
                $wageredByWeek->put($weekNumber, $wagered->has($weekNumber) ? $wagered->get($weekNumber) : 0);
            }

            return $wageredByWeek->values();
        });

        $statsByGame = Cache::remember('admin.dashboard.games.stats_by_game', $this->cacheTtl, function () {
            return Game::completed()->
            selectRaw('gameable_type,
                SUM(bet) AS bet_total,
                SUM(win) AS win_total,
                100 * (1 - SUM(win) / SUM(bet)) AS house_edge')
                ->groupBy('gameable_type')
                ->orderBy('gameable_type', 'asc')
                ->get();
        });

        return response()->json([
            'bets_last_month' => $betsLastMonth,
            'bets_this_month' => $betsThisMonth,
            'house_edge_last_month' => $houseEdgeLastMonth,
            'house_edge_this_month' => $houseEdgeThisMonth,
            'wagered_by_week' => $wageredByWeek,
            'stats_by_game' => $statsByGame
        ]);
    }
}
