<?php
require_once 'base.php';

class Result extends ModelBase{
    
    public $user_id;
    public $question_id;
    public $answer_id;

    public $user;
    public $question;
    public $answer;
    public $correct;

    public function __construct($db){
        $this->conn = $db;
        $this->table_name = "results";
    }
  
    function create(){
          
        $query = "INSERT INTO " . $this->table_name . " SET user_id=:user_id, question_id=:question_id, answer_id=:answer_id";        
        $stmt = $this->conn->prepare($query);
          
        $this->user_id=htmlspecialchars(strip_tags($this->user_id));
        $this->question_id=htmlspecialchars(strip_tags($this->question_id));
        $this->answer_id=htmlspecialchars(strip_tags($this->answer_id));
            
        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->bindParam(":question_id", $this->question_id);
        $stmt->bindParam(":answer_id", $this->answer_id);
  
        if($stmt->execute()){
            return true;
        }else{
            return false;
        }
  
    }

    function get($user_id){

        $query = "SELECT 
        u.name as 'user', 
        q.value as 'question', 
        a.value as 'answer',
        a.correct
        FROM `results` r 
        LEFT JOIN users u on r.user_id = u.id 
        LEFT JOIN questions q on r.question_id =q.id 
        LEFT JOIN answers a on r.answer_id = a.id 
        WHERE user_id= " . $user_id ."";

        return false;
    }
}
?>