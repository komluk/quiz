<?php
include_once '../../config/headers.php';
include_once '../../config/database.php';
include_once '../../models/answer.php'; 

$database = new Database();
$db = $database->getConnection();

$qid = isset($_GET['qid']) ? $_GET['qid'] : 1;

$answer  = new Answer($db);

$stmt = $answer->read($qid);
$num = $stmt->rowCount();

if($num>0){
  
    $answer_arr=array();
    $answer_arr["records"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);
  
        $answer_item=array(
            "id" => $id,
            "value" => $value,
            "question_id" => $question_id
        );
  
        array_push($answer_arr["records"], $answer_item);
    }
    http_response_code(200);
    echo json_encode($answer_arr);
}else{  
    http_response_code(404);
    echo json_encode(array("message" => "No questions found."));
}
?>