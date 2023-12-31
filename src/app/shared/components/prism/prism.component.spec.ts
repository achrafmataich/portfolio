import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismComponent } from './prism.component';

describe('PrismComponent', () => {
  let component: PrismComponent;
  let fixture: ComponentFixture<PrismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrismComponent]
    });
    fixture = TestBed.createComponent(PrismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
