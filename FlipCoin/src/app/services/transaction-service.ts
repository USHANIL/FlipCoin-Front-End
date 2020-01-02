import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { TransactionsComponent } from '../transactions/transactions.component';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    urlAll: string;
    urlAccount: string;
    urlUser: string;

    constructor(private http: HttpClient) {
        this.urlAll = 'http://localhost:8080/accounts/3/transactions';
        this.urlAccount = 'http://localhost:8080/accounts/3/top_5_transactions';
        this.urlUser = 'http://localhost:8080/user/2/most_recent_transactions';
    }

    public getTransactions(): Observable<TransactionsComponent[]> {
        return this.http.get<TransactionsComponent[ ]>(this.urlAll);
    }

    public getTop5TransactionsAccount(): Observable<TransactionsComponent[]> {
        return this.http.get<TransactionsComponent[ ]>(this.urlAccount);
    }

    public getTop5TransactionsUser(): Observable<TransactionsComponent[]> {
        return this.http.get<TransactionsComponent[ ]>(this.urlUser);
    }

}