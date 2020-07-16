<?php
include_once '../../config/headers.php';
include_once '../../config/database.php';
include_once '../../models/question.php';
 
$database = new Database();
$db = $database->getConnection();
  
$question = new question($db);
  
$stmt = $question->read();
$num = $stmt->rowCount();
  
if($num>0){
  
    $question_arr=array();
    $question_arr["records"]=array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);  
        $question_item=array(
            "id" => $id,
            "value" => $value
        );
  
        array_push($question_arr["records"], $question_item);
    }

    $total_rows=$question->count();
    $page_url="{$home_url}question/paging.php?";
    $paging=$question->getPaging($page, $total_rows, 1, $page_url);
    // $question_arr["paging"]=$paging;
  
    http_response_code(200);
    echo json_encode($question_arr);
}  
else{
    http_response_code(404);
    echo json_encode(array("message" => "No questions found."));
}
?>