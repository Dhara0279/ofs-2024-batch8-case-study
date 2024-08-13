package com.ofss.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Login;
import com.ofss.main.service.LoginService;

@RequestMapping("loginCRUDapi")
@RestController
@CrossOrigin("*")
@Component
public class LoginController {
	
	@Autowired
	public LoginService loginService;
	
	@GetMapping("login/{username}")
	public Login getLoginFromDB(@PathVariable("username")  String username) {
		return loginService.getLoginByUsername(username);
	}
	
	@GetMapping("alllogin")
	public List<Login> getAllLoginFromDB() {
		return loginService.getAllLogin();
	}
	
	@PostMapping("login")
	public Login addLoginToDB(@PathVariable Login login) {
		return loginService.addNewLogin(login);
	}
	
}
