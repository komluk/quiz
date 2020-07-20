<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/quiz/' :    
        require __DIR__ . '/views/index.html';
        break;
    case '/quiz/login' :
        require __DIR__ . '/views/login.html';
        break;
    case '/quiz/register' :
        require __DIR__ . '/views/register.html';
        break;
    case '/quiz/start' :
        require __DIR__ . '/views/quiz.html';
        break;
    case '/quiz/finish' :
        require __DIR__ . '/views/finish.html';
        break;
    case '/quiz/score' :
        require __DIR__ . '/views/score.html';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.html';
        break;
}
?>