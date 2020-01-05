import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account-service.service';
import { AccountListComponent } from '../account-list/account-list.component'
import { Account } from '../account/account.component';
import { Transactions } from '../transactions/transactions.component';
import { TransactionService } from '../services/transaction-service.service';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-withdraw-form',
  templateUrl: './withdraw-form.component.html',
  styleUrls: ['./withdraw-form.component.css']
})
export class WithdrawFormComponent implements OnInit {

  account: Account;
  accounts: Account[];
  transaction: Transactions;
  withdrawForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private transactionService: TransactionService
  ) { 
    this.transaction = new Transactions();
    this.withdrawForm = this.createFormGroup();
  }

  ngOnInit() {
    this.accountService.getAccountsByUserId().subscribe(data => {this.accounts = data;
    });
    }
  gotoAccountsList() {
    this.router.navigateByUrl('accounts');
  }
  onSubmit(){
    this.transaction.accountNumber = this.withdrawForm.controls['accountId'].value;
    this.transaction.amount = this.withdrawForm.controls['amount'].value;
    this.accountService.accountWithdraw(this.transaction).subscribe(data => this.gotoAccountsList());
  }
  createFormGroup(){
    return new FormGroup({
      amount: new FormControl(''),
      accountId: new FormControl('')
    });
}
}
