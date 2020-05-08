<?php

namespace App\Console\Commands;

use App\Models\GameRoom;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class DeleteEmptyGameRooms extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:game-rooms';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete empty game rooms';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // delete game rooms that have no players and not updated for more than 1 day
        GameRoom::doesntHave('players')->where('updated_at', '<', Carbon::now()->subDay())->delete();
    }
}
