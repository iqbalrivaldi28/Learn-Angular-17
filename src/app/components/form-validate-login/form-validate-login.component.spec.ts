import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidateLoginComponent } from './form-validate-login.component';

describe('FormValidateLoginComponent', () => {
  let component: FormValidateLoginComponent;
  let fixture: ComponentFixture<FormValidateLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidateLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormValidateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
