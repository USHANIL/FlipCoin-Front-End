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
    storedId: number;

    constructor(private http: HttpClient) {
        this.transactionsUrl = 'http://localhost:8080/API';
    }

    public getTransactions(accountId: number): Observable<Transactions[]> {
        return this.http.get<Transactions[ ]>(this.transactionsUrl + '/accounts/' + accountId + '/transactions');
    }

    public getTop5TransactionsAccount(accountId: number): Observable<Transactions[]> {
        return this.http.get<Transactions[ ]>(this.transactionsUrl + '/accounts/' + accountId + '/top_5_transactions');
    }

    public getTop5TransactionsUser(userId: number): Observable<Transactions[]> {
        return this.http.get<Transactions[ ]>(this.transactionsUrl + '/user/' + userId + '/most_recent_transactions');
    }

    public getTransactionDetails(transactionId: number): Observable<Transactions> {
        return this.http.get<Transactions>(this.transactionsUrl + '/accounts/transactions/' + transactionId)
    }

    public getStoredId(): number {
        return this.storedId;
    }

    public setStoredId(id: number) {
        this.storedId = id;
    }

}