import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {
  deposit:Boolean = true;
  withdraw:Boolean = false;
  transfer:Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  depositView(){
    this.deposit = true;
    this.withdraw = false;
    this.transfer = false;
  }
  withdrawView(){
  this.deposit = false;
    this.withdraw = true;
    this.transfer = false;
}
transferView(){
  this.deposit = false;
    this.withdraw = false;
    this.transfer = true;
}
}
