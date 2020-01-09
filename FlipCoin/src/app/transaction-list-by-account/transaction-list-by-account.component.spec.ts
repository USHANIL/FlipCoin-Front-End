import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListByAccountComponent } from './transaction-list-by-account.component';

describe('TransactionListByAccountComponent', () => {
  let component: TransactionListByAccountComponent;
  let fixture: ComponentFixture<TransactionListByAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListByAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
