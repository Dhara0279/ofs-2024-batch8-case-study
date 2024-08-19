/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ResponsiveUtils from 'ojs/ojresponsiveutils';
import "ojs/ojknockout";
import 'ojs/ojvalidation-base';
import * as ko from "knockout";
import "oj-c/input-text";
import 'oj-c/form-layout';
import 'oj-c/input-password';
import * as Bootstrap from "ojs/ojbootstrap";
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import { whenDocumentReady } from 'ojs/ojbootstrap';
import 'ojs/ojdatetimepicker';
import 'ojs/ojlabel';
import { ojDatePicker } from 'ojs/ojdatetimepicker';
import 'oj-c/select-single';
import 'oj-c/button';
import { RESTDataProvider } from "ojs/ojrestdataprovider";


const statesArray = [
  { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
  { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
  { value: 'Assam', label: 'Assam' },
  { value: 'Bihar', label: 'Bihar' },
  { value: 'Chhattisgarh', label: 'Chhattisgarh' },
  { value: 'Goa', label: 'Goa' },
  { value: 'Gujarat', label: 'Gujarat' },
  { value: 'Haryana', label: 'Haryana' },
  { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
  { value: 'Jharkhand', label: 'Jharkhand' },
  { value: 'Karnataka', label: 'Karnataka' },
  { value: 'Kerala', label: 'Kerala' },
  { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Manipur', label: 'Manipur' },
  { value: 'Meghalaya', label: 'Meghalaya' },
  { value: 'Mizoram', label: 'Mizoram' },
  { value: 'Nagaland', label: 'Nagaland' },
  { value: 'Odisha', label: 'Odisha' },
  { value: 'Punjab', label: 'Punjab' },
  { value: 'Rajasthan', label: 'Rajasthan' },
  { value: 'Sikkim', label: 'Sikkim' },
  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
  { value: 'Telangana', label: 'Telangana' },
  { value: 'Tripura', label: 'Tripura' },
  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
  { value: 'Uttarakhand', label: 'Uttarakhand' },
  { value: 'West Bengal', label: 'West Bengal' }
];



class CustomersViewModel {
  customerID : ko.Observable<number>;
  stateVal: ko.Observable<string>;
  username: ko.Observable<string> | ko.Observable<any>;
  password: ko.Observable<string> | ko.Observable<any>;
  login_status : ko.Observable<boolean>;
  no_Attemps : ko.Observable<number>;
  firstname: ko.Observable<string> | ko.Observable<any>;
  lastname: ko.Observable<string> | ko.Observable<any>;
  address: ko.Observable<string> | ko.Observable<any>;
  city: ko.Observable<string> | ko.Observable<any>;
  phonenumber: ko.Observable<number> | ko.Observable<any>;
  email: ko.Observable<string> | ko.Observable<any>;
  dob : ko.Observable<Date> | ko.Observable<any>;
  dateFormat : ko.Observable<Date> | ko.Observable<any>;
  customer_status : ko.Observable<string>;

  
  constructor() {
    this.customerID = ko.observable(0);
    this.stateVal = ko.observable('');
    this.username = ko.observable(null);
    this.password = ko.observable(null);
    this.firstname = ko.observable(null);
    this.lastname = ko.observable(null);
    this.address =ko.observable(null);
    this.city = ko.observable(null);
    this.email = ko.observable(null);
    this.dob = ko.observable(null);
    this.phonenumber = ko.observable(null);
    this.dateFormat = ko.observable("2012-03-02")
    this.login_status = ko.observable(true)
    this.no_Attemps = ko.observable(0)
    this.customer_status = ko.observable("inactive")
  }
  
  public buttonClick = async(event:Event) => {
    let elementName = (event.currentTarget as HTMLElement).tagName;
    let url = "http://localhost:8080/customerCRUDapi/customer";
    const row2 = {
      username:this.username(),
      password :this.password(),
      login_status : this.login_status(),
      no_Attemps : this.no_Attemps()
    }
    const row = {
      customerID : this.customerID(),
      login : row2,
      firstName: this.firstname(),
      lastName: this.lastname(),
      address: this.address(),
      state:this.stateVal(),
      city:this.city(),
      emailId:this.email(),
      dateOfBirth:this.dob() ,
      mobileNo:this.phonenumber(),
      customer_status : this.customer_status()
    }

    
    console.log(JSON.stringify(row))
    // Create and send request to REST service to add row
    const request = new Request(url, {
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify(row),
      method: "POST",
    });
      
    const response = await fetch(request);
    const addedRow = await response.json();


    console.log(addedRow);
    if(addedRow)
    {
      alert("Registered Successfully");
      window.location.href = ('\dashboard.html');
    }
    else
      alert("Login unsuccessfull")


    
  };

  readonly statesDP = new ArrayDataProvider(statesArray, {
    keyAttributes: 'value'
  });
}


export = CustomersViewModel;
