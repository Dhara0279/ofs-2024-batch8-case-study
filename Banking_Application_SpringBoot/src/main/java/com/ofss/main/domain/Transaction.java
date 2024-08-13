package com.ofss.main.domain;

import java.time.LocalTime;

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
@Table(name = "transactions")
public class Transaction {

	 @OneToOne( cascade = CascadeType.ALL)
	 @JoinColumn(name = "sender_id")
    private Account SenderAccount;
	 
	 @OneToOne( cascade = CascadeType.ALL)
	 @JoinColumn(name = "receiver_id")
    private Account ReceiverAccount;
	 
	 @Column(name = "transaction_time")
    private LocalTime time;
	 
	 @Column(name = "amount")
    private long Amount;
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "transaction_id")
    private long TransactionId;
    
    @Column(name = "payment_type")
    private String PaymentType;
    
    public Transaction() {
		
	}

    public Transaction(Account SenderAccount,Account ReceiverAccount,LocalTime time,long Amount,long TransactionId,String Paymenttype){

        this.SenderAccount=SenderAccount;
        this.ReceiverAccount=ReceiverAccount;
        this.time=time;
        this.Amount=Amount;
        this.TransactionId=TransactionId;
        this.PaymentType=Paymenttype;
    }

    public Account getSenderAccount() {
        return SenderAccount;
    }
    public void setSenderAccount(Account senderAccount) {
        SenderAccount = senderAccount;
    }
    public Account getReceiverAccount() {
        return ReceiverAccount;
    }
    public void setReceiverAccount(Account receiverAccount) {
        ReceiverAccount = receiverAccount;
    }
    public LocalTime getTime() {
        return time;
    }
    public void setTime(LocalTime time) {
        this.time = time;
    }
    public long getAmount() {
        return Amount;
    }
    public void setAmount(long amount) {
        Amount = amount;
    }
    public long getTransactionId() {
        return TransactionId;
    }
    public void setTransactionId(long transactionId) {
        TransactionId = transactionId;
    }
    public String getPaymentType() {
        return PaymentType;
    }
    public void setPaymentType(String paymentType) {
        PaymentType = paymentType;
    }
    

}
