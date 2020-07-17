<?php
include_once '../../config/headers.php';
include_once '../../config/core.php';
include_once '../../config/database.php';
include_once '../../models/question.php';
 
$database = new Database();
$db = $database->getConnection();
  
$id = isset($_GET['id']) ? $_GET['id'] : 0;

$question = new question($db);
$question_arr=array();
$question_arr["data"]=array();

if($id>0){
    $stmt = $question->read($id);
    $num = $stmt->rowCount();
      
    if($num>0){        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    
            extract($row);  
            $question_item=array(
                "id" => $id,
                "value" => $value
            );      
            array_push($question_arr["data"], $question_item);
        }
        $total_rows=$question->count();
        $question_arr["total"]=$total_rows;
      
        http_response_code(200);
        echo json_encode($question_arr);
    }  
    else{
        http_response_code(404);
        echo json_encode(array("message" => "No questions found."));
    }
}else{
    $stmt = $question->all();
    $num = $stmt->rowCount();
    if($num>0){    
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){    
            extract($row);  
            $question_item=array(
                "id" => $id,
                "value" => $value
            );    
            array_push($question_arr["data"], $question_item);
        }      
        http_response_code(200);
        echo json_encode($question_arr);
    }
    else{
        http_response_code(404);
        echo json_encode(array("message" => "No questions found."));   
    }
}
?>