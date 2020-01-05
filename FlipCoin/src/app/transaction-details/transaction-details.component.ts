import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Transactions } from 'app/transactions/transactions.component';
import { TransactionService } from 'app/services/transaction-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})

@Injectable({
  providedIn:'root'
})

export class TransactionDetailsComponent implements OnInit {

  @Input() transaction: Transactions;
  selectedTransaction: Transactions;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTransactionetails();
  }

  getTransactionetails(): void {
    const id = + this.route.snapshot.paramMap.get('transactionId');
    this.transactionService.getTransactionDetails(id).subscribe(data => {this.transaction = data;
    });
  }

  list(){
    const id = + this.route.snapshot.paramMap.get('accountId');
    this.router.navigate(['accountsOverview/' + id]);
  }

}
