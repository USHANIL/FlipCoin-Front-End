import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account.component'
import { AccountService } from '../services/account-service.service'
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  
  accounts: Account[];
  selectedAccount:Account;

  constructor(
    private accountService:AccountService,
    private route: ActivatedRoute, 
    private router: Router 
    ) { }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {this.accounts = data;
    });
  }
  remove(id : Number){
    this.accountService.remove(id).subscribe(result => {this.gotoAccountsList()});
  }
  gotoAccountsList() {
    this.router.navigate(['accounts']);
  }
  onSelect(account: Account): void {
    this.selectedAccount = account;
  }
  
  


}
