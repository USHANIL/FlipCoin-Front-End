import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/services/authentication.service';
import { Transactions } from 'app/transactions/transactions.component';
import { TransactionService } from 'app/services/transaction-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list-top-by-user',
  templateUrl: './transaction-list-top-by-user.component.html',
  styleUrls: ['./transaction-list-top-by-user.component.css']
})
export class TransactionListTopByUserComponent implements OnInit {

  @Input() user: User;
  transactionsUser: Transactions[];
  selectedTransaction: Transactions;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTop5TransactionsByUser();
  }

  getTop5TransactionsByUser(): void {
    const id = + this.route.snapshot.paramMap.get('userId');
    this.transactionService.getTop5TransactionsUser(id).subscribe(data => this.transactionsUser = data);
  }

}
