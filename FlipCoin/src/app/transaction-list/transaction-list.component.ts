import { Component, OnInit } from '@angular/core';
import { Transactions } from 'app/transactions/transactions.component';
import { TransactionService } from 'app/services/transaction-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transaction: Observable<Transactions[]>;
  id = + this.route.snapshot.paramMap.get('accountNumber');

  constructor(private transactionService: TransactionService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    //this.goToTransactionsList();
    // this.transactionService.getTransactions(this.id)
    // .subscribe(data => {this.transaction = data});
  }

  goToTransactionsList() {
    this.router.navigate(['transactions']);
  }

}
