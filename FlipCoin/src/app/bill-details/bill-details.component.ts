import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../services/bill-service.service'
import { BillComponent } from '../bill/bill.component'

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  @Input() bill: BillComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private billsService: BillService
  ) { }

  ngOnInit() {
    this.getBill();
  }
  getBill(): void {
    const id = +this.route.snapshot.paramMap.get('billId');
    this.billsService.getBillById(id).subscribe(bill => this.bill = bill);
  }
  remove(id: Number) {
    this.billsService.remove(id).subscribe(data => { this.gotoBillsList() });
  }
  gotoBillsList() {
    this.router.navigateByUrl('bills');
    
  }

}
