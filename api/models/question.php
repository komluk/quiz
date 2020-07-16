<?php
include_once 'model_base.php';

class Question extends ModelBase{
    private $conn;
    private 

    public $id;
    public $value;


    public function __constructor($db){
        $this->conn = $db;
        $this->table_name = "questions";
    }


    function getQuestions(){
        
    }
}
?>