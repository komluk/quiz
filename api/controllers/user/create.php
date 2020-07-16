<?php
include_once '../../config/headers.php';
include_once '../../config/database.php';
include_once '../../models/user.php';
 
$database = new Database();
$db = $database->getConnection();
 
$data = json_decode(file_get_contents("php://input"));

$user = new User($db);
$user->name = $data->name;
$user->password = $data->password;
 
if(
    !empty($user->name) &&
    !empty($user->password) &&
    $user->create()
){
    http_response_code(200);
    echo json_encode(array("message" => "User was created."));
}
else{
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create user."));
}
?>