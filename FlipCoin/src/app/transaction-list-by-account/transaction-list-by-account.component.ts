import { Component, OnInit, Input } from '@angular/core';
import { Transactions } from 'app/transactions/transactions.component';
import { TransactionService } from 'app/services/transaction-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'app/account/account.component';

@Component({
  selector: 'app-transaction-list-by-account',
  templateUrl: './transaction-list-by-account.component.html',
  styleUrls: ['./transaction-list-by-account.component.css']
})
export class TransactionListByAccountComponent implements OnInit {

  @Input() account: Account;
  transactions: Transactions[];
  selectedTransaction: Transactions;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions(): void {
    const id = + this.route.snapshot.paramMap.get('accountId');
    this.transactionService.getTransactions(id).subscribe(data => this.transactions = data);
  }

  onSelect(transaction: Transactions): void {
    this.selectedTransaction = transaction;
  }

}
