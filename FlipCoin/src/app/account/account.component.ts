import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class Account implements OnInit {
  accountNumber:number;
  accountName:string;
  userId:string;
  balance:string;
  type:string;
  interestRate:string;


  constructor() { }

  ngOnInit() {
  }

}