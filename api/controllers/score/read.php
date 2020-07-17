<?php
include_once '../../config/headers.php';
include_once '../../config/database.php';
include_once '../../models/score.php'; 

$database = new Database();
$db = $database->getConnection();

$uid = isset($_GET['uid']) ? $_GET['uid'] : 1;

$score  = new Score($db);

$stmt = $score->read($uid);
$num = $stmt->rowCount();

if($num>0){
  
    $score_arr=array();
    $score_arr["data"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);
        $score_item=array(
            "user" => $user_id,
            "score" => $score
        );
  
        array_push($score_arr["data"], $score_item);
    }
    http_response_code(200);
    echo json_encode($score_arr);
}else{  
    http_response_code(404);
    echo json_encode(array("message" => "No results found."));
}
?>