import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessLineService } from '../../Services/administration/businessLineService';


@Component({
  templateUrl: 'newBusinessLine.component.html'
})
export class  NewBusinessLineComponent implements OnInit{

  name_Line:string;
  Business_Unit:any;
  private _errorMessage;
  _invalidLogin : boolean = false;

  constructor( private router : Router,private service: BusinessLineService,private change: ChangeDetectorRef) { }
  ngOnInit() {
  
  }
  
 
  checkForm(myform){
    this.name_Line = myform.value.name_Line;
    console.log(myform.value.name_Line)
    console.log(myform.value.Business_Unit)
    this.Business_Unit=myform.value.Business_Unit;
    if (this.name_Line==null|| this.name_Line==""|| this.Business_Unit==null || this.Business_Unit=="") {
      
      this._errorMessage ="name line and business unit can't be blank";
      this._invalidLogin =true;

  }
  else {
    this._invalidLogin = false;
  }
}
  createBusinessLine(myform){
    this.checkForm(myform);
    if(!this._invalidLogin) {
     this.service.createBusinessLine(myform).subscribe(response=>{
           this.router.navigate(['/administration/area']);
     })
    
   }
   else {
     alert(this._errorMessage)
     
   }
  }

  

}
