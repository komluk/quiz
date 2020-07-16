<?php
include_once '../../config/headers.php';
include_once '../../config/core.php';
include_once '../../libs/BeforeValidException.php';
include_once '../../libs/ExpiredException.php';
include_once '../../libs/SignatureInvalidException.php';
include_once '../../libs/JWT.php';
use \Firebase\JWT\JWT;
 
$data = json_decode(file_get_contents("php://input"));
 
$jwt=isset($data->jwt) ? $data->jwt : "";
 
if($jwt){
 
    try {
        $decoded = JWT::decode($jwt, $key, array('HS256'));
 
        http_response_code(200);
        echo json_encode(array(
            "message" => "Access granted.",
            "data" => $decoded->data
        ));
 
    }
    catch (Exception $e){

        http_response_code(401);
        echo json_encode(array(
            "message" => "Access denied.",
            "error" => $e->getMessage()
        ));
    }
}
else{
    http_response_code(401);
    echo json_encode(array("message" => "Access denied."));
}
?>