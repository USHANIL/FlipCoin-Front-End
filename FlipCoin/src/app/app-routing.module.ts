import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from 'src/app/account-list/account-list.component'
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';

const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'addaccounts', component: AccountFormComponent },
  { path: 'accountsOverview/:accountId', component: AccountOverviewComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AccountFormComponent, AccountListComponent]
