<?php

class User{
    
    private $conn;
    private $table_name = "users";

    public $id;
    public $name;
    public $password;
     
    public function __construct($db){
        $this->conn = $db;
    }
 
    function create(){
        
        $query = "INSERT INTO " . $this->table_name . "SET name = :name, password = :password";
    
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->password=htmlspecialchars(strip_tags($this->password));
    
        // bind the values
        $stmt->bindParam(':name', $this->name);
    
        // hash the password before saving to database
        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
        $stmt->bindParam(':password', $password_hash);
    
        // execute the query, also check if query was successful
        if($stmt->execute()){
            return true;
        }
    
        return false;
    }

    function userExists(){
     
        $query = "SELECT id, name, password FROM " . $this->table_name . " WHERE name = ? LIMIT 0,1";
     
        // prepare the query
        $stmt = $this->conn->prepare( $query );
     
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
     
        // bind given name value
        $stmt->bindParam(1, $this->name);
     
        // execute the query
        $stmt->execute();
     
        // get number of rows
        $num = $stmt->rowCount();
     
        if($num>0){
     
            // get record details / values
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
     
            // assign values to object properties
            $this->id = $row['id'];
            $this->name = $row['name'];
            $this->password = $row['password'];
                 
            return true;
        }
        return false;
    }
}