<?php

class Question{
    private $conn;
    private $table_name = "questions";

    public $id;

    public function __constructor($db){
        $this->conn = $db;
    }


    function getQuestions(){
        
    }
}
?>