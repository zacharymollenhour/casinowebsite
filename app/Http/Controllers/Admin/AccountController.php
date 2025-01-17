<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\Queries\AccountQuery;
use App\Helpers\Queries\AccountTransactionQuery;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AccountCredit;
use App\Http\Requests\Admin\AccountDebit;
use App\Models\Account;
use App\Models\AccountTransaction;
use App\Models\GenericAccountTransaction;
use App\Services\AccountService;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        $query = new AccountQuery(new Account(), $request);

        $items = $query->getBuilder()
            ->with('user')
            ->get()
            ->map(function ($account) {
                $account->user->append('two_factor_auth_enabled', 'two_factor_auth_passed', 'is_admin', 'is_bot', 'is_active');
                return $account;
            });

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }

    public function show(Account $account)
    {
        return response()->json([
            'account' => $account->load('user')
        ]);
    }

    /**
     * Debit user account
     * It's important to type hint Account, so $this->account can be automatically resolved in AccountDebit request
     *
     * @param AccountDebit $request
     * @param Account $account
     * @param AccountService $accountService
     * @return \Illuminate\Http\JsonResponse
     */
    public function debit(AccountDebit $request, Account $account, AccountService $accountService)
    {
        $accountService->createGenericTransaction(GenericAccountTransaction::TYPE_DEBIT, -$request->amount);

        return response()->json([
            'status'    => __('Account successfully debited.')
        ]);
    }

    /**
     * Credit user account
     * It's important to type hint Account, so $this->account can be automatically resolved in AccountDebit request
     *
     * @param AccountDebit $request
     * @param Account $account
     * @param AccountService $accountService
     * @return \Illuminate\Http\JsonResponse
     */
    public function credit(AccountCredit $request, Account $account, AccountService $accountService)
    {
        $accountService->createGenericTransaction(GenericAccountTransaction::TYPE_CREDIT, $request->amount);

        return response()->json([
            'status'    => __('Account successfully credited.')
        ]);
    }

    public function transactions(Request $request, Account $account)
    {
        $query = new AccountTransactionQuery(new AccountTransaction(), $request);

        $items = $query->where(['account_id', '=', $account->id])
            ->getBuilder()
            ->with('transactionable')
            ->get();

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }
}
