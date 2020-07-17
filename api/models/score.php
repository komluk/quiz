<?php
require_once 'base.php';

class Score extends ModelBase{

    public $user_id;
    public $score;

    public function __construct($db){
        $this->conn = $db;
        $this->table_name = "scores";
    }

    function create(){
        $query = "INSERT INTO " . $this->table_name . " SET user_id=:user_id, score=:score";        
        $stmt = $this->conn->prepare($query);
          
        $this->user_id=htmlspecialchars(strip_tags($this->user_id));
        $this->score=htmlspecialchars(strip_tags($this->score));
            
        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->bindParam(":score", $this->score);
  
        if($stmt->execute()){
            return true;
        }else{
            return false;
        }
    }

    function read($uid){

        $query = "SELECT * FROM " . $this->table_name . " WHERE user_id=" . $uid . "";  
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
  
        return $stmt;        
    }
}
?>