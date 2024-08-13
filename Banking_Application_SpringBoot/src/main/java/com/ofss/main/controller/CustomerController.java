package com.ofss.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Login;
import com.ofss.main.service.CustomerService;

@RequestMapping("customerCRUDapi")
@RestController
@CrossOrigin("*")
@Component
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@GetMapping("customer/{username}")
	public ResponseEntity<Customer> getCustomerFromDB(@PathVariable String username) {
		Customer customer = customerService.getCustomerByUsername(username);
		if(customer!= null) {
			return ResponseEntity.ok(customer);
		}
		else
			return ResponseEntity.notFound().build();	
		}
	
	@GetMapping("allcustomers")
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomer();
	}
	
	@PostMapping("customer")
	public Customer addCustomerToDB(@RequestBody Customer customer) {
		return customerService.addNewCustomer(customer);
	}
	
}
