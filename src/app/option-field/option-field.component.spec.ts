import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFieldComponent } from './option-field.component';

describe('OptionFieldComponent', () => {
  let component: OptionFieldComponent;
  let fixture: ComponentFixture<OptionFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
