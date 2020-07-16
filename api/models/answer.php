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
}
?>