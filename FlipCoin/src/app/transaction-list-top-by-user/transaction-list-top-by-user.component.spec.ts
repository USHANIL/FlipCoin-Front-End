import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListTopByUserComponent } from './transaction-list-top-by-user.component';

describe('TransactionListTopByUserComponent', () => {
  let component: TransactionListTopByUserComponent;
  let fixture: ComponentFixture<TransactionListTopByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListTopByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListTopByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
