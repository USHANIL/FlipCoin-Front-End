import { Component, OnInit } from '@angular/core';
import { BillComponent } from '../bill/bill.component'
import { BillService } from '../services/bill-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BillDetailsComponent } from '../bill-details/bill-details.component';



@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  total: number;
  bills: BillComponent[];
  bill: BillComponent;
  selectedBill: BillComponent;
  storedId:number

  constructor(
    private billService: BillService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  ngOnInit() {

    this.billService.findAll().subscribe(data => {
    this.bills = data;
    this.billTotal();
    });
  }
  gotoBillsList() {
    this.router.navigate(['bills']);
  }
  remove(id : number){
    this.billService.remove(id).subscribe(result => {this.gotoBillsList()});
  }
  onSelect(bill: BillComponent): void {
    this.selectedBill = bill;
  }
  billTotal(){
    for (let bill of this.bills){
      this.total+=bill.amount;
    }
  }
  storeNumber(id:number){
  this.billService.setStoreId(id);
  this.router.navigateByUrl('billDetails');
  console.log(id);
  }
}
