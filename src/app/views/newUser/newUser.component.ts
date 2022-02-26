import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'newUser',
  templateUrl: 'newUser.component.html'
})

export class  NewUserComponent implements OnInit{

  email:string;
  login:string;
  firstName: string;
  lastName: string;
  roles:string;
  Business_Unit:string;
  Business_Line:string;
  Departement: string;
  Area:string;
  private _errorMessage;
  _invalidLogin : boolean = false;

  constructor( private router : Router) { }
  ngOnInit() {
  }
  checkForm(myform){
    this.email = myform.value.email;
    if (this.email==null|| this.email=="") {
      this._errorMessage ="Email can't be blank";
      this._invalidLogin =true;
  }
  else {
    this._invalidLogin = false;
  }
}
  createUser(myform){
    this.checkForm(myform);
    if(!this._invalidLogin) {
  
   // this.email=myform.value.email;
    this.login=myform.value.login;
    this.firstName=myform.value.firstName;
    this.lastName=myform.value.lastName;
    this.roles=myform.value.roles;
    this.Business_Unit=myform.value.Business_Unit;
    this.Business_Line=myform.value.Business_Line;
    this.Departement=myform.value.Departement;
    this.Area=myform.value.Area;
 
     this.router.navigate(['administration/users']);
   }
   else {
     alert(this._errorMessage)
     
   }
  }
  }
