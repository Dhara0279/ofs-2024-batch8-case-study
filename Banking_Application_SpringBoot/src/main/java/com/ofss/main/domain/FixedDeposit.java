package com.ofss.main.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class FixedDeposit extends Account{

    private Float RateOfInterest;

    private static final long Maturity_period=12;

    private LocalDate Opening_Date;
    

    public FixedDeposit(Customer customer,String type,long balance,long accountno,float RateOfInterest){

        super(accountno,balance,type,customer);
        this.RateOfInterest=RateOfInterest;
    }


    public Float getRateOfInterest() {
        return RateOfInterest;
    }


    public void setRateOfInterest(Float rateOfInterest) {
        RateOfInterest = rateOfInterest;
    }


    public long getMaturity_period() {
        return Maturity_period;
    }


    public LocalDate getOpening_Date() {
        return Opening_Date;
    }


    public void setOpening_Date(LocalDate opening_Date) {
        Opening_Date = opening_Date;
    }

    
}
