<?php

namespace FoF\RealTimeLogin;

use Flarum\Extend;
use Flarum\Api\Controller\ShowForumController;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Routes('api'))
        ->get('/forums', 'forum.get.index', ShowForumController::class)
];
