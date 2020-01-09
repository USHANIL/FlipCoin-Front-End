import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../services/bill-service.service'
import { BillComponent } from '../bill/bill.component'
@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {

  bill: BillComponent;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private billsService: BillService) {
    this.bill = new BillComponent()
  }
  
  onSubmit() {
    this.bill.userId = sessionStorage.getItem('userId');
    this.billsService.save(this.bill).subscribe(data => this.gotoBillsList());
  }
  gotoBillsList() {
    this.router.navigateByUrl('bills');
  }
  ngOnInit() {
  }
}