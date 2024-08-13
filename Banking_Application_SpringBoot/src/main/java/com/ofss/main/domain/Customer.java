package com.ofss.main.domain;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customer_id")
    private int customerID;
	
	@Column(name = "first_name")
    private String FirstName;
	
	@Column(name = "last_name")
    private String LastName;
	
	@Column(name = "address")
    private String Address;
	
	@Column(name = "state")
    private String State;
	
	@Column(name = "city")
    private String City;
	
	@Column(name = "mob_number")
    private long MobileNo;
	
	@Column(name = "email_id")
    private String EmailId;
	
	@Column(name = "date_of_birth")
    private LocalDate DateofBirth;
	
	@Column(name = "customer_status")
    private String Customer_status;
   
    @OneToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "username")
    private Login login;
    

    public Customer() {
	}

	public Customer(int id,String fname,String Lname,String add,String state,String city,long mob,String email,LocalDate dob,String status,Login login){

        this.customerID=id;
        this.FirstName=fname;
        this.LastName=Lname;
        this.Address=add;
        this.State=state;
        this.City=city;
        this.MobileNo=mob;
        this.EmailId=email;
        this.DateofBirth=dob;
        this.Customer_status=status;
        this.login=login;
       
    }

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public long getMobileNo() {
        return MobileNo;
    }

    public void setMobileNo(long mobileNo) {
        MobileNo = mobileNo;
    }

    public String getEmailId() {
        return EmailId;
    }

    public void setEmailId(String emailId) {
        EmailId = emailId;
    }

   
    public LocalDate getDateofBirth() {
        return DateofBirth;
    }

    public void setDateofBirth(LocalDate dateofBirth) {
        DateofBirth = dateofBirth;
    }

    public String getCustomer_status() {
        return Customer_status;
    }

    public void setCustomer_status(String Customer_status) {
        this.Customer_status = Customer_status;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    @Override
    public String toString(){

        return "Id :- "+ customerID+ " Name :- "+ FirstName + " Lastname :- "+ LastName + " address " + Address + " State " + State + " City " + City + " MobileNo " + MobileNo + " EmailId " + EmailId + " DateofBirth " + DateofBirth + " Customer Status " + Customer_status + " Username " + login.getUsername();
    }

}
