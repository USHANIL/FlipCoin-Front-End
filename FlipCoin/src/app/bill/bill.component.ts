import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  
  billId:number;
  userId:string;
  recipient:string;
  purpose:string;
  amount:number;
  initialBillDate:Date;
  billCycle:number;
  

  constructor() { }

  ngOnInit() {
  }
  

}
