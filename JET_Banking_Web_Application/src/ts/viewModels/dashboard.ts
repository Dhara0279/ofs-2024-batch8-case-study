/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import "ojs/ojknockout";
import * as ko from "knockout";
import Message = require("ojs/ojmessaging");
import "oj-c/input-text";
import 'oj-c/form-layout';
import 'oj-c/input-password';
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/button";
import { RESTDataProvider } from 'ojs/ojrestdataprovider';



type D = {"username":string,"password":string}
type K = D["username"]

class DashboardViewModel {
  username: ko.Observable<string> | ko.Observable<any>;
  password : ko.Observable<string>  | ko.Observable<any>;
  isSubmitEnabled: ko.Computed<boolean>;


  constructor() {
    this.username = ko.observable('');
    this.password = ko.observable('');


    this.isSubmitEnabled = ko.computed(() => {
      const usernameValue = this.username() || '';
      const passwordValue = this.password() || '';
      return usernameValue.trim() !== '' && passwordValue.trim() !== '';
  });

  }

  public buttonAction = async(event: Event) => {
    // Handle button click
    let URL = 'http://localhost:8080/loginCRUDapi/login';
    const row ={
      username: this.username(),
      password: this.password()
    }

    console.log(JSON.stringify(row))

    const request = new Request(URL, {
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify(row),
      method: "POST",
    });
    const response = await fetch(request);
    const addedRow = await response.json();
    

    if(addedRow){
      console.log(" Successful");
      alert("Login Successfull")
     }else{
      console.log("Wrong credentials");
  
     }


  };
}

export = DashboardViewModel;
