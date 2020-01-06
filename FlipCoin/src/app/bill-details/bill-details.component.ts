import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../services/bill-service.service';
import { BillComponent } from '../bill/bill.component';
import { Location } from '@angular/common';
import { BillListComponent } from '../bill-list/bill-list.component';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  @Input() bill: BillComponent;
  @Input() list: BillListComponent;

  

  constructor(
    
    private route: ActivatedRoute,
    private router: Router,
    private billsService: BillService
    
  ) { }

  ngOnInit() {
    this.getBill();
  }
  getBill(): void{
    //const id = +this.route.snapshot.paramMap.get('billId');
    this.billsService.getBillById(this.billsService.getStoredId()).subscribe(bill => this.bill = bill);
  }
  remove(id: number) {
    this.billsService.remove(id).subscribe(data => { this.gotoBillsList() });
  }
  gotoBillsList() {
    this.router.navigateByUrl('billtracker');
    
  }

}
