<?php
error_reporting(E_ALL);
date_default_timezone_set('Europe/Warsaw');
 
// home page url
$home_url="http://localhost/quiz/";
$page = isset($_GET['page']) ? $_GET['page'] : 1;

// variables used for jwt
$key = "example_key";
$iss = "http://example.org";
$aud = "http://example.com";
$iat = 1356999524;
$nbf = 1357000000;
?>