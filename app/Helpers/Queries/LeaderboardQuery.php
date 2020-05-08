<?php

namespace App\Helpers\Queries;

use App\Models\Game;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class LeaderboardQuery extends Query
{
    protected $sortableColumns = [
        'name',
        'bet_count',
        'bet_total',
        'profit_total',
        'profit_max'
    ];

    protected function calculateRowsCount(): int
    {
        return $this->getModel()->active()->count();
    }

    protected function getBaseBuilder(): Builder
    {
        return $this->getModel()->selectRaw('users.id,
                users.name,
                users.avatar,
                COUNT(games.id) AS bet_count,
                IFNULL(SUM(games.bet),0) AS bet_total,
                IFNULL(SUM(games.win-games.bet),0) AS profit_total,
                IFNULL(MAX(games.win-games.bet),0) AS profit_max')
            ->active()
            ->leftJoin('accounts', 'accounts.user_id', '=', 'users.id')
            ->leftJoin('games', function ($query) {
                $query->on('accounts.id', '=', 'games.account_id');
                $query->on('games.status', '=', DB::raw(Game::STATUS_COMPLETED));
            })
            ->groupBy('users.id', 'name', 'avatar');
    }
}
