import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyUnitComponent } from './buy-unit.component';

describe('BuyUnitComponent', () => {
  let component: BuyUnitComponent;
  let fixture: ComponentFixture<BuyUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
