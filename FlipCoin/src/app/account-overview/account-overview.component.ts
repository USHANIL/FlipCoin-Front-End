import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account-service.service'
import { Account } from '../account/account.component'
import { TransactionListByAccountComponent } from '../transaction-list-by-account/transaction-list-by-account.component'
import { Location } from '@angular/common';
import { TransactionService } from '../services/transaction-service.service'

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  @Input() account: Account;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private transactionService:TransactionService,
    private transactions:TransactionListByAccountComponent
  ){}

  ngOnInit() {
    this.getAccount()
    
  }
  getAccount(): void {
    this.transactions.getTransactions();
    const id = +this.route.snapshot.paramMap.get('accountId');
    this.accountService.getAccountById(id).subscribe(account => this.account = account)
  }
  remove(id: Number) {
    this.accountService.remove(id).subscribe(data => { this.gotoAccountsList() });
  }
  gotoAccountsList() {
    this.router.navigateByUrl('accounts');
  }
}
