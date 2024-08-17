/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import 'oj-c/input-password';
import "oj-c/input-date-text";
import 'oj-c/form-layout';
import "oj-c/button";
import "oj-c/menu-button";
import "oj-c/split-menu-button";
import { MenuItems } from 'oj-c/menu-button';
import 'oj-c/message-toast';
import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');
import "oj-c/progress-bar";
import "ojs/ojlabelvalue";
import "ojs/ojlabel";
import { whenDocumentReady } from "ojs/ojbootstrap";


class DashboardViewModel {
  value: ko.Observable<string>;
  firstname: ko.Observable<string> | ko.Observable<any>;
  salary : ko.Observable<number>  | ko.Observable<any>;
  password : ko.Observable<string>  | ko.Observable<any>;
  date : ko.Observable<Date> | ko.Observable<any>;
  disableControls: ko.Computed<boolean>;
  menuItems: Array<MenuItems>;
  disabledValue: ko.ObservableArray<boolean>;
  readonly messages: MutableArrayDataProvider<string, Record<string, any>>;
  readonly closeMessage = (event: CustomEvent) => {
    let data = this.messages.data.slice();
    const closeMessageKey = event.detail.key;

    data = data.filter((message) => (message as any).id !== closeMessageKey);
    this.messages.data = data;
  };
  readonly progressValue = ko.observable(0);
  readonly buttonDisplay = ko.pureComputed(() => {
    return this.progressValue() === 100 ? "inline-flex" : "none";
  });
  readonly loadingText = ko.pureComputed(() => {
    return this.progressValue() === 100 ? "Details Saved!" : "Loading...";
  });
    
  
  constructor() {
    this.value = ko.observable("Green");
    this.firstname = ko.observable(null);
    this.salary = ko.observable(null)
    this.password = ko.observable(null);
    this.date = ko.observable(null);
    this.disabledValue = ko.observableArray();
    this.disableControls = ko.computed(() => {
      return this.disabledValue()[0];
    });

    const initialData = [
      {
        id: 'error1',
        severity: 'error',
        summary: 'Error message summary',
        detail: 'Error message detail.'
      }];

    this.menuItems = [
      { key: "save", label: "Save", startIcon: { class: "oj-ux-ico-print" }, disabled: false },
      {
        key: "zoomin",
        label: "Zoom In",
        startIcon: { class: "oj-ux-ico-zoom-in"},
        disabled: false,
      },
      {
        key: "zoomout",
        label: "Zoom Out",
        startIcon: {class: "oj-ux-ico-zoom-out"},
        disabled: false,
      },
      {
        key: "print",
        label: "Print...",
        startIcon: {class: "oj-ux-ico-print"},
        disabled: true,
      },
    ];
    this.messages = new MutableArrayDataProvider(initialData, {
      keyAttributes: 'id'
    });
    window.setInterval(() => {
      {
        this.progressValue(Math.min(this.progressValue() + 1, 100));
      }
    }, 30);
}
// public handleClick = async (event:Event) => {
//   let elementName = (event.currentTarget as HTMLElement).tagName;
//   console.log("Element name: "+elementName)
//   console.log("Name "+this.firstname());
//   let id = parseInt(this.firstname());
//   let URL ="https://jsonplaceholder.typicode.com/users/" + id;
//   let res = await fetch(URL);
//   let jsonData = await res.json();

//   this.firstname(jsonData.name)
//   console.log(jsonData)

// }
}


export = DashboardViewModel;
