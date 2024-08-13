package com.ofss.main.domain;

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
@Table(name = "account")
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_id")
    private long AccountNo;
	
	@Column(name = "balance")
    private long Balance;
	
	@Column(name = "account_type")
    private String AccountType;
	
	@OneToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private Customer customer;
    
    public Account(long accountNo,long balance,String AccountType,Customer customer){

        this.AccountType=AccountType;
        this.customer=customer;
        this.AccountNo=accountNo;
        this.Balance=balance;
    }

    public boolean withdraw(long amount){
       
        if(amount>0 && Balance >= amount){

            Balance=Balance-amount;
            return true;
        }
        return false;
    }

    public boolean deposit(long amount){

        if(amount<=0){
            return false;
        }
        else{
            Balance = Balance+amount;
            return true;
        }
    }

    public long getAccountNo() {
        return AccountNo;
    }

    public void setAccountNo(long accountNo) {
        AccountNo = accountNo;
    }

    public long getBalance() {
        return Balance;
    }

    public void setBalance(long balance) {
        Balance = balance;
    }

    public String getAccountType() {
        return AccountType;
    }

    public void setAccountType(String AccountType) {
        this.AccountType = AccountType;
    }
}
