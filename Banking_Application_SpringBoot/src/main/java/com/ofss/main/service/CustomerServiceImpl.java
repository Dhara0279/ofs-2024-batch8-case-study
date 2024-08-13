package com.ofss.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Login;
import com.ofss.main.repository.CustomerRepository;
import com.ofss.main.repository.LoginRepository;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private LoginRepository loginRepository;
	
	
	public Customer getCustomerByUsername(String username) {
		System.out.println(username);
		Customer customerOptional =customerRepository.findByLogin_username(username);
		return customerOptional;
	}


	@Override
	public List<Customer> getAllCustomer() {
		List<Customer> listOfCustomers = (List<Customer>) customerRepository.findAll();
		return listOfCustomers;
	}


	@Override
	public Customer addNewCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

}
