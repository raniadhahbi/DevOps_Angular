import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  templateUrl: 'newCurrency.component.html'
})
export class  NewCurrencyComponent  implements OnInit{

  date_input: Date;
  currency_code:number=0;
  rate:number=0;
  private _errorMessage;
  _invalidLogin : boolean = false;

  constructor( private router : Router) { }
  ngOnInit() {
  }
  checkForm(myform){
    
    this.date_input=myform.value.date_input;
    let newone=new Date(this.date_input);
    newone.toLocaleDateString();
    //console.log(typeof(newone.toLocaleDateString()))
  
    this.currency_code=parseFloat(myform.value.currency_code);
    this.rate=parseFloat(myform.value.rate);
    if ( this.date_input==null  ||  this.currency_code==null ||  this.rate==null  ) {
      this._errorMessage ="Those fields can't be blank";
      this._invalidLogin =true;

  }
  else {
    this._invalidLogin = false;
  }
}
  createCurrency(myform){
    this.checkForm(myform);
    if(!this._invalidLogin) {

    this.date_input=myform.value.date_input;

    this.currency_code=parseFloat(myform.value.currency_code);
    this.rate=parseFloat(myform.value.rate);
    
    this.router.navigate(['administration/currencies']);
   }
   else {
     alert(this._errorMessage)
     
   }
}
}
