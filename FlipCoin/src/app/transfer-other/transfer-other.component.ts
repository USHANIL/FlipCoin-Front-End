import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account-service.service';
import { AccountListComponent } from '../account-list/account-list.component'
import { Account } from '../account/account.component';
import { Transactions } from '../transactions/transactions.component';
import { TransactionService } from '../services/transaction-service.service';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-transfer-other',
  templateUrl: './transfer-other.component.html',
  styleUrls: ['./transfer-other.component.css']
})
export class TransferOtherComponent implements OnInit {

  account: Account;
  accounts: Account[];
  transactionSender: Transactions;
  transactionRecipient: Transactions;
  otherForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private transactionService: TransactionService
    
  ) {
    this.transactionSender = new Transactions();
    this.transactionRecipient = new Transactions();
    this.otherForm = this.createFormGroup();
   }

   ngOnInit() {
    this.accountService.getAccountsByUserId().subscribe(data => {this.accounts = data;
    });
    }
  gotoAccountsList() {
    this.router.navigateByUrl('accounts');
  }
  onSubmit(){
    this.transactionSender.accountNumber = this.otherForm.controls['accountId'].value;
    this.transactionSender.amount = this.otherForm.controls['amount'].value;
    this.accountService.transferSender(this.transactionSender).subscribe(data => this.gotoAccountsList());
    this.transactionRecipient.accountNumber = this.otherForm.controls['recipientId'].value;
    this.transactionRecipient.amount = this.otherForm.controls['amount'].value;
    this.accountService.transferRecipient(this.transactionRecipient).subscribe(data => this.gotoAccountsList());
   
  }
  createFormGroup(){
    return new FormGroup({
      amount: new FormControl(''),
      accountId: new FormControl(''),
      recipientId: new FormControl('')
    });
}
}
