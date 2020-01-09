import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';
import { AuthenticationService } from 'app/services/authentication.service';
import { Account } from 'app/account/account.component';
import { AccountService } from 'app/services/account-service.service';
import { TransactionService } from 'app/services/transaction-service.service';
import { Transactions } from 'app/transactions/transactions.component';

@Component({
  selector: 'app-logged-in-container',
  templateUrl: './logged-in-container.component.html',
  styleUrls: ['./logged-in-container.component.css']
})
export class LoggedInContainerComponent implements OnInit {

  user: User = new User();
  accounts: Account[];
  transactions: Transactions[];

  constructor(
    private userService: UserService, 
    private authenticate: AuthenticationService,
    private accountService: AccountService,
    private transactionService: TransactionService
    ) { }

  ngOnInit() {
    this.userService.getUser(this.authenticate.getUser()).subscribe(e => this.user = e);
    this.userService.getUserId(this.authenticate.getUser()).subscribe();
    this.getUserAccounts();
    
    
  }

  getUserAccounts(){
    this.accountService.getAccountsByUserId().subscribe(data => {this.accounts = data;});
  }

  getTransactions(id){
    this.transactionService.getTransactions(id).subscribe(e => this.transactions= e);
  }
  

}
