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
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojtable";

import 'oj-c/avatar';
import 'oj-c/list-item-layout';
import 'oj-c/list-view';
import 'ojs/ojpreact-managetabstops';



let deptData = [
    {
      "DepartmentId": 10,
      "DepartmentName": "Finance 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2014-06-13",
      "EmployeeCount": 335,
      "Type": "Sales",
      "Currency": "EUR",
      "Primary": [],
      "Rating": 3,
      "TargetComplete": 90
    },
    {
      "DepartmentId": 20,
      "DepartmentName": "Control And Credit 9",
      "LocationId": 300,
      "ManagerId": 7001,
      "StartDate": "2019-09-10",
      "EmployeeCount": 206,
      "Type": "HR",
      "Currency": "USD",
      "Primary": [],
      "Rating": 1,
      "TargetComplete": 90
    },
    {
      "DepartmentId": 30,
      "DepartmentName": "Purchasing 28",
      "LocationId": 400,
      "ManagerId": 6001,
      "StartDate": "2021-01-03",
      "EmployeeCount": 473,
      "Type": "HR",
      "Currency": "JPY",
      "Primary": ["checked"],
      "Rating": 3,
      "TargetComplete": 50
    },
    {
      "DepartmentId": 40,
      "DepartmentName": "Purchasing 27",
      "LocationId": 400,
      "ManagerId": 1001,
      "StartDate": "2016-02-01",
      "EmployeeCount": 369,
      "Type": "Finance",
      "Currency": "JPY",
      "Primary": [],
      "Rating": 5,
      "TargetComplete": 80
    }
]

class DashboardViewModel {
  
  value: ko.Observable<string>;
  firstname: ko.Observable<string> | ko.Observable<any>;
  email: ko.Observable<string> | ko.Observable<any>;
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

  readonly dataprovider = new ArrayDataProvider(deptData, {
    keyAttributes: "DepartmentId",
    implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
  });




  readonly options = [
    { value: 'In Office' },
    { value: 'Out of Office' }
  ];

  public readonly data = [
    {
      id: 'e1',
      name: 'Chris Black',
      email: 'chris.black@acme.com',
      image: 'https://th.bing.com/th/id/OIP.0v6al8cY4jV1xxwlx9W4bgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      status: 'In Office'
    },
    {
      id: 'e2',
      name: 'Christine Cooper',
      email: 'christine.cooper@acme.com',
      image: 'https://th.bing.com/th/id/OIP.0v6al8cY4jV1xxwlx9W4bgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      status: 'In Office'
    },
    {
      id: 'e3',
      name: 'Chris Benalamore',
      email: 'chris.benalamore@acme.com',
      image: 'https://th.bing.com/th/id/OIP.0v6al8cY4jV1xxwlx9W4bgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      status: 'Out of Office'
    },
    {
      id: 'e4',
      name: 'Christopher Johnson',
      email: 'christopher.johnson@acme.com',
      image: 'https://th.bing.com/th/id/OIP.0v6al8cY4jV1xxwlx9W4bgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      status: 'In Office'
    },
    {
      id: 'e5',
      name: 'Samire Christian',
      email: 'samire.christian@acme.com',
      title: 'Consulting Project Technical Manager',
      image: 'https://th.bing.com/th/id/OIP.0v6al8cY4jV1xxwlx9W4bgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      status: 'In Office'
    },
    {
      id: 'e6',
      name: 'Kurt Marchris',
      email: 'kurt.marchris@acme.com',
      image: 'https://th.bing.com/th/id/OIP.0v6al8cY4jV1xxwlx9W4bgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      status: 'Out of Office'
    },
    {
      id: 'e7',
      name: 'Zelda Christian Cooperman',
      email: 'zelda.christian.cooperman@acme.com',
      image: 'https://th.bing.com/th/id/OIP.0v6al8cY4jV1xxwlx9W4bgHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      status: 'Out of Office'
    }
  ];

  readonly dataProvider = new ArrayDataProvider(this.data, {
    keyAttributes: 'id'
  });




  constructor() {
    this.value = ko.observable("Green");
    this.firstname = ko.observable(null);
    this.email = ko.observable(null);
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
   

    console.log(this.dataProvider)
}

public handleClick = async (event:Event) => {
  let elementName = (event.currentTarget as HTMLElement).tagName;
  console.log("Element name: "+elementName)
  console.log("Name "+this.firstname());
  let id = parseInt(this.firstname());
  let URL ="https://jsonplaceholder.typicode.com/users/" + id;
  let res = await fetch(URL);
  let jsonData = await res.json();

  this.firstname(jsonData.name)
  this.email(jsonData.email)
  console.log(jsonData)

}

}

export = DashboardViewModel;