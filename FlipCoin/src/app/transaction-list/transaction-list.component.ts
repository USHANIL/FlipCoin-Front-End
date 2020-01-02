import { Component, OnInit } from '@angular/core';
import { TransactionsComponent } from 'app/transactions/transactions.component';
import { TransactionService } from 'app/services/transaction-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transaction: TransactionsComponent[];

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
    this.transactionService.getTransactions()
    .subscribe(data => {this.transaction = data});
  }

}
