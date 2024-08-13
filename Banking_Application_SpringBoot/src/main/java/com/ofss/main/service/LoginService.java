package com.ofss.main.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ofss.main.domain.Login;

public interface LoginService {
	
	 	List<Login> getAllLogin();
	 
	    Login getLoginByUsername(String username);

	    Login addNewLogin(Login login);

	    boolean updateLogin(Login login);

	    boolean deleteLoginByUsername(String Username);

	    int CheckPassword(String username,String password);

	    boolean CheckCustomerStatus(String Username);
}
