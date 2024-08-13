package com.ofss.main.domain;

import jakarta.persistence.Entity;

@Entity
public class Current extends Account{

    private long OverDraftBalance;
    private long TotalOverDraft;

    public Current(Customer customer,String type,long balance,long accountno,long OverDraftBalance){

        super(accountno,balance,type,customer);
        this.OverDraftBalance=OverDraftBalance;
    }

    @Override
    public boolean withdraw(long amount){

        if(amount > 0 && amount <= getBalance()){

            setBalance(getBalance()-amount);
            return true;
        }

        if(amount > 0 && amount <= getBalance()+OverDraftBalance){

            amount=amount-getBalance();
            setBalance(0);
            setOverDraftBalance(OverDraftBalance-amount);
            return true;
        }

        return false;
    }

    @Override
    public boolean deposit(long amount){

        if(amount > 0 && OverDraftBalance < TotalOverDraft){

            if( (TotalOverDraft-OverDraftBalance) >= amount){

                setOverDraftBalance(OverDraftBalance+amount);
            }
            else{
  
                amount = amount - (TotalOverDraft-OverDraftBalance);
                setOverDraftBalance(TotalOverDraft);
                setBalance(getBalance() + amount);
            }

            return true;
        }

        if(amount > 0 ){

            setBalance(getBalance()+amount);

            return true;
        }
        return false;
    }

    public long getOverDraftBalance() {
        return OverDraftBalance;
    }

    public void setOverDraftBalance(long OverDraftBalance) {
        this.OverDraftBalance = OverDraftBalance;
    }
}
