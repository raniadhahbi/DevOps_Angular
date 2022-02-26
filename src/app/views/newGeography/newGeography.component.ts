import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'newGeography.component.html'
})
export class  NewGeographyComponent implements OnInit{

  continent:string;
  country:string;
  area:string;
  private _errorMessage;
  private _invalidLogin : boolean = false;

  constructor( private router : Router) { }
  ngOnInit() {
  }
  checkForm(myform){
    
    this.continent=myform.value.continent;
    this.country=myform.value.country;
    this.area=myform.value.area;
    
    if (  this.continent==null || this.continent=="" || this.country==null || 
     this.country=="" || this.area==null || this.area=="") {
      this._errorMessage ="Customer Name and customer group can't be blank";
      this._invalidLogin =true;

  }
  else {
    this._invalidLogin = false;
  }
}
  createGeography(myform){
    this.checkForm(myform);
    if(!this._invalidLogin) {
    this.router.navigate(['administration/geography']);
   }
   else {
     alert(this._errorMessage)
     
   }
}

}
