<?php 
include_once '../../config/headers.php';
include_once '../../config/core.php';
include_once '../../config/database.php';
include_once '../../models/result.php';
  
$database = new Database();
$db = $database->getConnection();
  
$data = json_decode(file_get_contents("php://input"));

$result = new Result($db);
$result->user_id = $data->user;
$result->question_id = $data->question;
$result->answer_id = $data->answer;
 
if(
    !empty($result->user_id) &&
    !empty($result->question_id) &&
    !empty($result->answer_id) &&
    $result->create()
){
    http_response_code(200);
    echo json_encode(array("message" => "Result saved."));
}
else{
    http_response_code(400);
    echo json_encode(array("message" => "Unable to save result."));
}
?>