<?php
include_once '../../config/headers.php';
include_once '../../config/database.php';
include_once '../../models/answer.php'; 

$database = new Database();
$db = $database->getConnection();

$qid = isset($_GET['qid']) ? $_GET['qid'] : 0;

$answer  = new Answer($db);

$stmt = $answer->read($qid);
$num = $stmt->rowCount();

if($qid>0 && $num>0){
  
    $answer_arr=array();
    $answer_arr["data"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);
  
        $answer_item=array(
            "id" => $id,
            "value" => $value,
            "correct" => $correct == 1 ? true : false,
            "points" => $points
        );
  
        array_push($answer_arr["data"], $answer_item);
    }
    http_response_code(200);
    echo json_encode($answer_arr);
}else{  
    http_response_code(404);
    echo json_encode(array("message" => "No answers found."));
}
?>