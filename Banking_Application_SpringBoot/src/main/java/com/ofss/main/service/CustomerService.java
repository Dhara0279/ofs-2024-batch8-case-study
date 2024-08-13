package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Login;

public interface CustomerService {
	
	Customer getCustomerByUsername(String username);
	
	List<Customer> getAllCustomer();
	
	Customer addNewCustomer(Customer customer);
}
