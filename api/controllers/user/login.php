<?php
// required headers
include_once '../../config/headers.php';

// files needed to connect to database
include_once '../../config/database.php';
include_once '../../models/user.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// instantiate user object
$user = new User($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$user->name = $data->name;
$user_exists = $user->userExists();
 
include_once '../../config/core.php';
include_once '../../libs/BeforeValidException.php';
include_once '../../libs/ExpiredException.php';
include_once '../../libs/SignatureInvalidException.php';
include_once '../../libs/JWT.php';
use \Firebase\JWT\JWT;

// check if email exists and if password is correct
if($user_exists && password_verify($data->password, $user->password)){
 
    $token = array(
       "iss" => $iss,
       "aud" => $aud,
       "iat" => $iat,
       "nbf" => $nbf,
       "data" => array(
           "id" => $user->id,
           "name" => $user->name
       )
    );
 
    http_response_code(200);
 
    $jwt = JWT::encode($token, $key);
    echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt
            )
        );
}
else{
    http_response_code(401);
    echo json_encode(array("message" => "Login failed."));
}
?>