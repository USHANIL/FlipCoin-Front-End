import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account-service.service'
import { Account } from '../account/account.component'
import { Location } from '@angular/common';

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
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.getAccount()
  }

  getAccount(): void {
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
