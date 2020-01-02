import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Transactions } from '../transactions/transactions.component';
import { Account } from 'app/account/account.component';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    transactionsUrl: string;
    urlAccount: string;
    urlUser: string;

    constructor(private http: HttpClient) {
        this.transactionsUrl = 'http://localhost:8080/API';
        this.urlAccount = 'http://localhost:8080/accounts/3/top_5_transactions';
        this.urlUser = 'http://localhost:8080/user/2/most_recent_transactions';
    }

    public getTransactions(accountId: number): Observable<Transactions[]> {
        return this.http.get<Transactions[ ]>(this.transactionsUrl + '/accounts/' + accountId + '/transactions');
    }

    public getTop5TransactionsAccount(): Observable<Transactions[]> {
        return this.http.get<Transactions[ ]>(this.urlAccount);
    }

    public getTop5TransactionsUser(): Observable<Transactions[]> {
        return this.http.get<Transactions[ ]>(this.urlUser);
    }

}