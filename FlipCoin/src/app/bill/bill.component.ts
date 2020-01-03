import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  billId:string;
  userId:string;
  recipient:string;
  purpose:string;
  amount:number;
  InitialBillDate:Date;
  billCycle:number;

  constructor() { }

  ngOnInit() {
  }
  

}
