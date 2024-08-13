package com.ofss.main.domain;

import jakarta.persistence.Entity;

@Entity
public class Savings extends Account{

    private boolean isSalaryAccount;
    private static final long minimumBalance=1500;
    private Float RateOfInterest;

    public Savings(boolean isSalaryAccount,Customer customer,String type,long balance,long accountno,float RateOfInterest){

        super(accountno,balance,type,customer);
        this.isSalaryAccount=isSalaryAccount;
        this.RateOfInterest=RateOfInterest;
    }

    public Float getRateOfInterest() {
        return RateOfInterest;
    }

    public void setRateOfInterest(Float RateOfInterest) {
        this.RateOfInterest = RateOfInterest;
    }

    @Override
    public boolean withdraw(long amount){

        if(amount >0 && isSalaryAccount && amount<=getBalance()){

            setBalance(getBalance() - amount);
            return true;
        }

        if(amount > 0 && !isSalaryAccount && getBalance()-amount >= minimumBalance){

            setBalance(getBalance()-amount);
            return true;
        }
        return false;
    }

    @Override
    public boolean deposit(long amount){

        if(amount > 0){

            setBalance(getBalance()+amount);
            return true;
        }
        return false;
    }

    public boolean isSalaryAccount() {
        return isSalaryAccount;
    }

    public void setSalaryAccount(boolean isSalaryAccount) {
        this.isSalaryAccount = isSalaryAccount;
    }

    public static long getMinimumbalance() {
        return minimumBalance;
    }
}
