import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../account/account.component';
import { Observable, of } from 'rxjs'
import { AccountListComponent } from '../account-list/account-list.component'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  private accountsUrl: string;
 
  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080/API';
  }
 
  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl +'/accounts/all_accounts');
  }
  public getAccountById(accountNumber: number): Observable<Account> {
  return this.http.get<Account>(this.accountsUrl+'/accounts/'+ accountNumber);
  }
 
  public save(accounts: Account) {
    return this.http.post<Account>(this.accountsUrl +'/accounts/dummy_created', accounts);

  }
  public remove(id: Number) {
    return this.http.delete<Account[]>(this.accountsUrl + '/accounts/'+ id);
  }
  public getAccountsByUserId(userId: number): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl+'/user/{userId}/accounts'
    );
}
}
