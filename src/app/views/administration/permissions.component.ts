import {Component, OnDestroy} from '@angular/core';

@Component({
  templateUrl: 'permissions.component.html'
})
export class PermissionsComponent  {

  
  constructor() { }

  totalItems: number = 64;
  currentPage: number   = 4;
  smallnumPages: number = 0;

  maxSize: number = 1;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 4;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
