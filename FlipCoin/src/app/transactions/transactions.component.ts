import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactionId: number;
  accountNumber: number;
  amount: number;
  type: string;
  transactionDate: Date;

  constructor() { }

  ngOnInit() {
  }

}
