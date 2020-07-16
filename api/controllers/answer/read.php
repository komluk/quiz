<?php
include_once '../../config/headers.php'
include_once '../../config/database.php';
include_once '../../models/answer.php'; 

$database = new Database();
$db = $database->getConnection();

$answer  = new Answer($db);

$stmt = $answer->read();
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


function read(){
  
    $query = "SELECT
                c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
            FROM
                " . $this->table_name . " p
                LEFT JOIN
                    categories c
                        ON p.category_id = c.id
            ORDER BY
                p.created DESC";
  
    $stmt = $this->conn->prepare($query);
    $stmt->execute(); 
    
    return $stmt;
}
?>