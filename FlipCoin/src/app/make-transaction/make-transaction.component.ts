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
  other:Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  depositView(){
    this.deposit = true;
    this.withdraw = false;
    this.transfer = false;
    this.other = false;
  }
  withdrawView(){
  this.deposit = false;
    this.withdraw = true;
    this.transfer = false;
    this.other = false;
}
transferView(){
  this.deposit = false;
    this.withdraw = false;
    this.transfer = true;
    this.other = false;
}
otherView(){
  this.deposit = false;
    this.withdraw = false;
    this.transfer = false;
    this.other = true;
}
}
