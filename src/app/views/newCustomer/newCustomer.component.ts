import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'newCustomer.component.html'
})
export class  NewCustomerComponent implements OnInit{
  

  name_Customer: string;
  partner:string;
  Business_Unit:string;
  Business_Line:string;
  Departement:string;
  group:string;
  country:string;
  Area:string;
  private _errorMessage;
  private _invalidLogin : boolean = false;

  constructor( private router : Router) { }
  ngOnInit() {
  }
  checkForm(myform){
    
    this.name_Customer=myform.value.name_Customer;
    this.partner=myform.value.partner;
    this.Business_Unit=myform.value.Business_Unit;
    this.Business_Line=myform.value.Business_Line;
    this.Departement=myform.value.Departement;
    this.group=myform.value.group;
    this.country=myform.value.country;
    this.Area=myform.value.Area;
    
    if ( this.name_Customer==null  || this.name_Customer=="" || this.partner==null || this.partner =="" || 
     this.Business_Unit==null || this.Business_Unit=="" || this.Business_Line==null || this.Business_Line==""||
     this.Departement==null ||this.Departement==""|| this.group==null || this.group=="" || this.country==null || 
     this.country=="" || this.Area==null || this.Area=="") {
      this._errorMessage ="Customer Name and customer group can't be blank";
      this._invalidLogin =true;

  }
  else {
    this._invalidLogin = false;
  }
}
  createCustomer(myform){
    this.checkForm(myform);
    if(!this._invalidLogin) {


    
    this.router.navigate(['administration/customers']);
   }
   else {
     alert(this._errorMessage)
     
   }
}
}
