import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from './services/account-service.service';
import { AppComponent } from './app.component';
import { Account } from './account/account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { FooterComponent } from './layoutComponents/footer/footer.component';
import { HeaderComponent } from './layoutComponents/header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { ContactComponent } from './info/contact/contact.component';
import { HelpComponent } from './info/help/help.component';
import { DashboardComponent } from './layoutComponents/dashboard/dashboard.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { LoggedInContainerComponent } from './postLogComponents/logged-in-container/logged-in-container.component';
import { RegisterComponent } from './register/register.component';
import { Transactions } from './transactions/transactions.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { NotesComponent } from './postLogComponents/notes/notes.component';
import { TransactionListByAccountComponent } from './transaction-list-by-account/transaction-list-by-account.component';

import { TransactionListTopByUserComponent } from './transaction-list-top-by-user/transaction-list-top-by-user.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

import { UserProfileComponent } from './postLogComponents/user-profile/user-profile.component';
import { UserProfileFormComponent } from './postLogComponents/user-profile-form/user-profile-form.component';
import { DepositFormComponent } from './deposit-form/deposit-form.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { WithdrawFormComponent } from './withdraw-form/withdraw-form.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransferOtherComponent } from './transfer-other/transfer-other.component';
import { BillService } from './services/bill-service.service';






@NgModule({
  declarations: [
    AppComponent,
    Account,
    AccountListComponent,
    AccountFormComponent,
    AccountOverviewComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    BillComponent,
    BillListComponent,
    BillDetailsComponent,
    BillFormComponent,
    AboutUsComponent,
    ContactComponent,
    HelpComponent,
    DashboardComponent,
    LoggedInContainerComponent,
    RegisterComponent,
    Transactions,
    TransactionListComponent,
    NotesComponent,
    TransactionListByAccountComponent,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dev
    DepositFormComponent,
    MakeTransactionComponent,
    WithdrawFormComponent,
    TransferFormComponent,
<<<<<<< HEAD
=======
    
=======
=======

    TransactionListTopByUserComponent,
    TransactionDetailsComponent,

>>>>>>> 6d363a208da0af4e0761f515894b145e6d58179f
>>>>>>> dev
    UserProfileComponent,
    UserProfileFormComponent,
    DepositFormComponent,
    MakeTransactionComponent,
    WithdrawFormComponent,
<<<<<<< HEAD
    TransferFormComponent,
    TransferOtherComponent
=======
    TransferFormComponent

<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 91e712e29aa29305512588ac7b870b29226ec926
=======
>>>>>>> dev
>>>>>>> 6d363a208da0af4e0761f515894b145e6d58179f
>>>>>>> dev
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers: [AccountService, BillService, BillListComponent,
    { provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true },
<<<<<<< HEAD
     UserProfileComponent
=======
     UserProfileComponent,
  
>>>>>>> dev
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }