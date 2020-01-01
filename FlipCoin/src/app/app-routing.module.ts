import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component'
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './info/contact/contact.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { HelpComponent } from './info/help/help.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'help', component: HelpComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'addaccounts', component: AccountFormComponent },
  { path: 'accountsOverview/:accountId', component: AccountOverviewComponent}
  
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AccountFormComponent, AccountListComponent]
