<?php
require_once 'base.php';

class Question extends ModelBase{

    public $value;


    public function __constructor($db){
        $this->conn = $db;
        $this->table_name = "questions";
    }


    function read(){

        $query = "SELECT
                    id, value
                FROM
                    " . $this->table_name . "
                ORDER BY
                    id";
  
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
  
        return $stmt;        
    }
}
?>