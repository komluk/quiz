<?php
require_once 'base.php';

class Answer extends ModelBase{

    public $question_id;
    public $value;    
    public $correct;

    public function __construct($db){
        $this->conn = $db;
        $this->table_name = "answers";
    }

    function read($question){

        $query = "SELECT id, value, question_id FROM " . $this->table_name . " WHERE question_id=" . $question . " ORDER BY id";  
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
  
        return $stmt;        
    }
}
?>