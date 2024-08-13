package com.ofss.main.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Login;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer>{
	
	 Customer findByLogin_username(String username);
}
