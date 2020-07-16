<?php
require_once 'model_base.php';

class Question extends ModelBase{

    public $value;


    public function __constructor($db){
        $this->conn = $db;
        $this->table_name = "questions";
    }


    function getQuestions(){
        
    }
}
?>