package com.Content;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Connect {

    public static Connection getDbConnect(){
    	try {
    		Class.forName("com.mysql.jdbc.Driver");
    	}catch(Exception e) {};
    	
        Connection conn = null;
        String url = "jdbc:mysql://localhost/mydb?userSSL=true&characterEncoding=utf-8";
        String user = "root";
        try{
            conn = DriverManager.getConnection(url,user,"");
        }catch(SQLException e){
        	System.out.println("123");
        }
        return conn;
    }
}

/*
public class Connect {
	 public static Connection getConnection(){
		 Connection con=null;
		 String user = "root";
		 String pwd = "";
		 String uri="jdbc:mysql://localhost:3306/mydb?useSSL=true&characterEnocoding=characterEncoding=utf-8";
		 try{
			 Class.forName("com.mysql.jdbc.Driver");
		 }catch(Exception e){ }
		 
		 
		 try{
			 con=DriverManager.getConnection(uri, user,pwd);
		 }catch(Exception e){
			 System.out.println("error");
		 }
		 return con;

	 }
}*/
