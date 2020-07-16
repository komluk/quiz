<?php
require_once 'base.php';

class User extends ModelBase{

    public $name;
    public $password;
     
    public function __construct($db){
        $this->conn = $db;
        $this->table_name = "users";
    }
 
    function create(){
        
        $query = "INSERT INTO " . $this->table_name . " SET name = :name, password = :password";
        $stmt = $this->conn->prepare($query);
    
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->password=htmlspecialchars(strip_tags($this->password));
    
        $stmt->bindParam(':name', $this->name);
        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
        $stmt->bindParam(':password', $password_hash);

        if($stmt->execute()){
            return true;
        }
        return false;
    }

    function userExists(){
     
        $query = "SELECT id, name, password FROM " . $this->table_name . " WHERE name = ? LIMIT 0,1";
        $stmt = $this->conn->prepare( $query );

        $this->name=htmlspecialchars(strip_tags($this->name));

        $stmt->bindParam(1, $this->name);
        $stmt->execute();
        $num = $stmt->rowCount();
     
        if($num>0){
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->id = $row['id'];
            $this->name = $row['name'];
            $this->password = $row['password'];
                 
            return true;
        }
        return false;
    }
}