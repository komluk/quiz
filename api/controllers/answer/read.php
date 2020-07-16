<?php
include_once '../../config/headers.php';
include_once '../../config/database.php';
include_once '../../models/answer.php'; 

$database = new Database();
$db = $database->getConnection();

$question = isset($_GET['question']) ? $_GET['question'] : 1;

$answer  = new Answer($db);

$stmt = $answer->read($question);
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
    echo json_encode(array("message" => "No products found."));
}


// function read(){
  
//     $query = "SELECT
//                 c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
//             FROM
//                 " . $this->table_name . " p
//                 LEFT JOIN
//                     categories c
//                         ON p.category_id = c.id
//             ORDER BY
//                 p.created DESC";
  
//     $stmt = $this->conn->prepare($query);
//     $stmt->execute(); 
    
//     return $stmt;
// }

// function readOne(){

//     $query = "SELECT
//                 c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
//             FROM
//                 " . $this->table_name . " p
//                 LEFT JOIN
//                     categories c
//                         ON p.category_id = c.id
//             WHERE
//                 p.id = ?
//             LIMIT
//                 0,1";

//     $stmt = $this->conn->prepare( $query );
//     $stmt->bindParam(1, $this->id);
//     $stmt->execute();
  
//     $row = $stmt->fetch(PDO::FETCH_ASSOC);
  
//     $this->value = $row['answer'];
//     $this->correct = $row['correct'];
//     $this->question = $row['question'];
//     $this->question_id = $row['question_id'];                  
// }
?>