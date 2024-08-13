package com.ofss.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Login;
import com.ofss.main.repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	public LoginRepository loginRepository;
	
	@Override
	public List<Login> getAllLogin() {
		List<Login> listoflogin = (List<Login>) loginRepository.findAll();
		return listoflogin;
	}

	@Override
	public Login getLoginByUsername(String username) {
		System.out.println(username);
		Login loginOptional = loginRepository.findByusername(username);
		return loginOptional;
	}

	@Override
	public Login addNewLogin(Login login) {
		return loginRepository.save(login);
	}

	@Override
	public boolean updateLogin(Login login) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteLoginByUsername(String Username) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int CheckPassword(String username, String password) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean CheckCustomerStatus(String Username) {
		// TODO Auto-generated method stub
		return false;
	}

}
