<?php
include_once '../../config/headers.php';
include_once '../../config/database.php';
include_once '../../models/result.php'; 

$database = new Database();
$db = $database->getConnection();

$uid = isset($_GET['uid']) ? $_GET['uid'] : 1;

$result  = new Result($db);

$stmt = $result->read($qid);
$num = $stmt->rowCount();

if($num>0){
  
    $result_arr=array();
    $result_arr["records"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);
  
        $result_item=array(
            "user" => $user,
            "question" => $question,
            "answer" => $answer,
            "correct" => $correct
        );
  
        array_push($result_arr["records"], $result_item);
    }
    http_response_code(200);
    echo json_encode($result_arr);
}else{  
    http_response_code(404);
    echo json_encode(array("message" => "No results found."));
}
?>