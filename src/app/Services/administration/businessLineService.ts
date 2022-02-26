import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessLineService {

  urlBusinessLine = 'http://127.0.0.1:8070/addclient';
  BusinessLine: any;
  constructor(private Http: HttpClient) { }


    createBusinessLine(myform) {
    this.BusinessLine = {
      'name_Line': myform.value.name_Line,
      'Business_Unit': myform.value.Business_Unit
    }
    return this.Http.post(this.urlBusinessLine + '/add', this.BusinessLine);
  }

}