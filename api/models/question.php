<?php
require_once 'base.php';

class Question extends ModelBase{

    public $value;


    public function __construct($db){
        $this->conn = $db;
        $this->table_name = "questions";
    }


    function read($id){
        $query = "SELECT id, value FROM " . $this->table_name . "  WHERE id= " . $id . "";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
  
        return $stmt;        
    }

    function all(){
        $query = "SELECT id, value FROM " . $this->table_name . "";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
  
        return $stmt;    
    }
    
    function count(){
        
        $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
      
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
      
        return $row['total_rows'];
    }
}
?>