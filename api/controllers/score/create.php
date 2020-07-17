<?php 
include_once '../../config/headers.php';
include_once '../../config/core.php';
include_once '../../config/database.php';
include_once '../../models/score.php';
  
$database = new Database();
$db = $database->getConnection();
  
$data = json_decode(file_get_contents("php://input"));

$score = new Score($db);
$score->user_id = $data->user;
$score->score = $data->score;
 
if(
    !empty($score->user_id) &&
    !empty($score->score) &&
    $score->create()
){
    http_response_code(200);
    echo json_encode(array("message" => "Score saved."));
}
else{
    http_response_code(400);
    echo json_encode(array("message" => "Unable to save score."));
}
?>