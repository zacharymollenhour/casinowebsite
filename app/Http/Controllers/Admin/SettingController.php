<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\PackageManager;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateSettings;
use App\Services\DotEnvService;
use App\Services\OAuthService;

class SettingController extends Controller
{
    public function get(OAuthService $OAuthService, PackageManager $packageManager)
    {
        $config = [
            'app'           => config('app'),
            'broadcasting'  => config('broadcasting'),
            'logging'       => config('logging'),
            'mail'          => config('mail'),
            'oauth'         => config('oauth'),
            'settings'      => config('settings'),
            'services'      => config('services'),
            'session'       => config('session'),
        ];

        foreach ($packageManager->getEnabled() as $id => $package) {
            $config[$id] = config($id);
        }

        return [
            'config' => $config
        ];
    }

    public function update(UpdateSettings $request, DotEnvService $dotEnvService)
    {
        $variables = $request->all();

        $files = [
            [
                'name' => 'logo',
                'variable' => 'APP_LOGO',
                'folder' => 'images',
            ],
            [
                'name' => 'banner',
                'variable' => 'APP_BANNER',
                'folder' => 'images',
            ],
            [
                'name' => 'front',
                'variable' => 'GAMES_PLAYING_CARDS_FRONT_IMAGE',
                'folder' => 'images/games/playing-cards',
            ],
            [
                'name' => 'back',
                'variable' => 'GAMES_PLAYING_CARDS_BACK_IMAGE',
                'folder' => 'images/games/playing-cards',
            ]
        ];

        foreach ($files as $file) {
            if ($request->hasFile($file['variable']) && $request->file($file['variable'])->isValid()) {
                $fileName = $file['name'] . '.' . $request->{$file['variable']}->extension();
                // save uploaded logo in storage
                $request->{$file['variable']}->storeAs($file['folder'], $fileName, 'public');
                // note that $request->merge() will not work with file uploads
                $variables = array_merge(
                    $request->except($file['variable']),
                    [$file['variable'] => '/storage/' . $file['folder'] . '/' . $fileName]
                );
            }
        }

        // save settings to .env file
        return $dotEnvService->save($variables)
            ? $this->successResponse(__('Settings successfully saved.') . ' ' . __('Please refresh the page for the new settings to take in effect.'))
            : $this->errorResponse(__('There was an error while saving the settings.') . ' ' . __('Please check that .env file exists and has write permissions.'));
    }
}
