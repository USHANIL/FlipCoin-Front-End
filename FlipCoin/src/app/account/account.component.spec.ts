import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Account } from './account.component';

describe('AccountComponent', () => {
  let component: Account;
  let fixture: ComponentFixture<Account>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Account ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Account);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
