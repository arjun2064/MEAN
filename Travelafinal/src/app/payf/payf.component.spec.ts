import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfComponent } from './payf.component';

describe('PayfComponent', () => {
  let component: PayfComponent;
  let fixture: ComponentFixture<PayfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
