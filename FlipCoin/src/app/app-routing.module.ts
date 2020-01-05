import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component'
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './info/contact/contact.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { HelpComponent } from './info/help/help.component';
import { LoggedInContainerComponent } from './postLogComponents/logged-in-container/logged-in-container.component';
import { RegisterComponent } from './register/register.component';
import { TransactionListByAccountComponent } from './transaction-list-by-account/transaction-list-by-account.component';
import { NotesComponent } from './postLogComponents/notes/notes.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logged-in', component: LoggedInContainerComponent },
  { path: 'registration', component: RegisterComponent},
  { path: 'notes', component: NotesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'help', component: HelpComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'user/:userId/accounts', component: AccountListComponent},
  { path: 'addaccounts', component: AccountFormComponent },
  { path: 'newTransaction', component: TransactionFormComponent },
  { path: 'accountsOverview/:accountId', component: AccountOverviewComponent},
  { path: 'accounts/:accountId/transactions', component: TransactionListByAccountComponent},
  { path: 'accountsOverview/:accountId', component: AccountOverviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AccountFormComponent, AccountListComponent]
