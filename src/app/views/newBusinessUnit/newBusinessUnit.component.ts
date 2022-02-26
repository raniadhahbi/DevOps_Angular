import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'newBusinessUnit.component.html'
})
export class  NewBusinessUnitComponent implements OnInit{
  name_Unit:string;
  
  private _errorMessage;
  _invalidLogin : boolean = false;

  constructor( private router : Router) { }
  ngOnInit() {
  }
  checkForm(myform){
    
    this.name_Unit=myform.value.name_Unit;
    if ( this.name_Unit==null || this.name_Unit=="") {
      this._errorMessage ="Name unit can't be blank";
      this._invalidLogin =true;

  }
  else {
    this._invalidLogin = false;
  }
}
  createBusinessUnit(myform){
    this.checkForm(myform);
    if(!this._invalidLogin) {

    this.name_Unit=myform.value.name_Unit;
 
    this.router.navigate(['administration/Business_Units']);
   }
   else {
     alert(this._errorMessage)
     
   }
  }

}
