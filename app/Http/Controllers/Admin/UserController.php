<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\Queries\UserQuery;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateUser;
use App\Models\User;
use App\Notifications\UserMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = new UserQuery(new User(), $request);

        $items = $query->getBuilder()
            ->with('profiles', 'referrer')
            ->get()
            ->map
            ->makeVisible('referrer')
            ->map
            ->append('two_factor_auth_enabled', 'two_factor_auth_passed', 'is_admin', 'is_bot', 'is_active');

        return [
            'count' => $query->getRowsCount(),
            'items' => $items
        ];
    }

    public function show(User $user)
    {
        return [
            'user' => $user
                ->append('two_factor_auth_enabled')
                ->makeVisible('referrer')
                ->loadMissing('referrer'),
            'roles' => User::roles(),
            'statuses' => User::statuses(),
        ];
    }

    public function update(UpdateUser $request, User $user)
    {
        foreach ($request->all() as $property => $value) {
            if ($property == 'password' && $value) {
                $user->password = Hash::make($value);
            } else {
                $user->{$property} = $value;
            }
        }
        $user->save();

        return [
            'status'    => __('User successfully updated.'),
            'user'      => $user
        ];
    }

    /**
     * Delete the specified user
     *
     * @param  \App\Models\User  $user
     * @return array
     */
    public function destroy(Request $request, User $user)
    {
        // check that the user being deleted is not current
        if ($request->user()->id == $user->id) {
            abort(409, __('You can not delete currently logged user.'));
        }

        // delete user
        $user->delete();

        return [
            'status' => __('User successfully deleted.'),
        ];
    }

    /**
     * Send mail
     *
     * @param Request $request
     * @param User $user
     * @return array
     */
    public function mail(Request $request, User $user)
    {
        try {
            $user->notify(new UserMessage($request->subject, $request->greeting, $request->message));
        } catch (\Exception $e) {
            Log::error($e->getMessage());

            return [
                'success' => FALSE,
                'message' => __('There was an error while sending the email, please check the app logs for more details.')
            ];
        }

        return [
            'success' => TRUE,
            'message' => __('Message is successfully sent.')
        ];
    }
}
