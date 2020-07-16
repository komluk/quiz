<?php
require_once 'model_base.php';

class Answer extends ModelBase{

    public $question_id;
    public $value;    
    public $correct;

    public function __constructor($db){
        $this->conn = $db;
        $this->table_name = "answers";
    }
}
?>