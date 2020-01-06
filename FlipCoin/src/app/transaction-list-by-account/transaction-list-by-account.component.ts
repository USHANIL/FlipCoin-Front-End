import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Transactions } from 'app/transactions/transactions.component';
import { TransactionService } from 'app/services/transaction-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'app/account/account.component';
import { TransactionDetailsComponent } from 'app/transaction-details/transaction-details.component';

@Component({
  selector: 'app-transaction-list-by-account',
  templateUrl: './transaction-list-by-account.component.html',
  styleUrls: ['./transaction-list-by-account.component.css']
})
@Injectable({
  providedIn:'root'
})

export class TransactionListByAccountComponent implements OnInit {

  @Input() account: Account;
  transactions: Transactions[];
  selectedTransaction: Transactions;
  transactionDetails: TransactionDetailsComponent
  toggle: boolean = true;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions(): void {
    const id = +this.route.snapshot.paramMap.get('accountId');
    this.transactionService.getTransactions(id).subscribe(data => this.transactions = data);
  }

  onSelect(transaction: Transactions): void {
    this.selectedTransaction = transaction;
  }

  onClick() {
    if (this.toggle === true) {
      this.toggle = false;
    }
    else{
      this.toggle = true;
    }
     console.log(this.transactionDetails, event);
  }

  onClick2(id: number) {
    this.transactionService.setStoredId(id);
    this.router.navigateByUrl('transactionDetails');
  }

}
