import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account-service.service';
import { AccountListComponent } from '../account-list/account-list.component'
import { Account } from '../account/account.component';
import { Transactions } from '../transactions/transactions.component';
import { TransactionService } from '../services/transaction-service.service';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.css']
})

export class DepositFormComponent implements OnInit {

  account: Account;
  accounts: Account[];
  transaction: Transactions;
  depositForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private transactionService: TransactionService
    
  ) {
    this.transaction = new Transactions();
    this.depositForm = this.createFormGroup();
  }


  ngOnInit() {
    this.accountService.getAccountsByUserId().subscribe(data => {this.accounts = data;
    });
    }
  gotoAccountsList() {
    this.router.navigateByUrl('accounts');
  }
  onSubmit(){
    this.transaction.accountNumber = this.depositForm.controls['accountId'].value;
    this.transaction.amount = this.depositForm.controls['amount'].value;
    this.accountService.accountDeposit(this.transaction).subscribe(data => this.gotoAccountsList());
  }
  createFormGroup(){
    return new FormGroup({
      amount: new FormControl(''),
      accountId: new FormControl('')
    });
}
}
