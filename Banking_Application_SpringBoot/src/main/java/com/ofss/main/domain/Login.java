package com.ofss.main.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;

@Entity
@Table(name = "login")
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "username")
    private String username;
	
	@Column(name = "password")
    private String password;
	
	@Column(name = "No_of_attempts")
    private int No_Attemps;
	
	@Column(name = "login_status")
    private boolean login_status;

    public Login(){
        System.out.println("Default Constructor of login");
    }

    public Login(String username,String password,int attempts,boolean status){

        this.username=username;
        this.password=password;
        this.No_Attemps=attempts;
        this.login_status=status;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getNo_Attemps() {
        return No_Attemps;
    }

    public void setNo_Attemps(int no_Attemps) {
        No_Attemps = no_Attemps;
    }

    public boolean isLogin_status() {
        return login_status;
    }

    public void setLogin_status(boolean login_status) {
        this.login_status = login_status;
    }
}
