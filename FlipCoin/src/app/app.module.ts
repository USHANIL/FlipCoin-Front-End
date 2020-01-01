import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AboutUsComponent } from './info/about-us/about-us.component';
import { ContactComponent } from './info/contact/contact.component';
import { HelpComponent } from './info/help/help.component';

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
    AboutUsComponent,
    ContactComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }