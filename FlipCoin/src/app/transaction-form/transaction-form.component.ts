import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account-service.service';
import { AccountListComponent } from '../account-list/account-list.component'
import { Account } from '../account/account.component';
import { Transactions } from '../transactions/transactions.component';
import { TransactionService } from '../services/transaction-service.service';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-tranasction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})

export class TransactionFormComponent implements OnInit {

  account: Account;
  accounts: Account[];
  transaction: Transactions;
  tForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private transactionService: TransactionService,
    
  ) {
    this.tForm = this.createFormGroup();
  }


  ngOnInit() {
    this.accountService.getAccountsByUserId().subscribe(data => {this.accounts = data;
    });
    }
  gotoAccountsList() {
    this.router.navigateByUrl('accounts');
  }
  onSubmit(){
    this.accountService.accountDeposit(
      this.tForm.controls['accountId'].value,
      this.tForm.controls['amount'].value
      ).subscribe(data => this.gotoAccountsList());
  }
  createFormGroup(){
    return new FormGroup({
      amount: new FormControl(''),
      accountId: new FormControl('')
    });
}
}
