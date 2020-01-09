import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOtherComponent } from './transfer-other.component';

describe('TransferOtherComponent', () => {
  let component: TransferOtherComponent;
  let fixture: ComponentFixture<TransferOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
