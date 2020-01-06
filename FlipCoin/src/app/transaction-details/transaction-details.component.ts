import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Transactions } from 'app/transactions/transactions.component';
import { TransactionService } from 'app/services/transaction-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionListByAccountComponent } from 'app/transaction-list-by-account/transaction-list-by-account.component';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})

export class TransactionDetailsComponent implements OnInit {

  @Input() transaction: Transactions;
  @Input() tList: TransactionListByAccountComponent;
  selectedTransaction: Transactions;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTransactionetails();
    console.log(this.transaction);
  }

  getTransactionetails(): void {
    //const id = + this.route.snapshot.paramMap.get('transactionId');
    this.transactionService.getTransactionDetails(this.transactionService.getStoredId()).subscribe(transaction => {this.transaction = transaction;
    })
    
  }

  list(){
    const id = + this.route.snapshot.paramMap.get('accountId');
    this.router.navigate(['accounts']);
  }

}
