import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveStructuralComponent } from './directive-structural.component';

describe('DirectiveStructuralComponent', () => {
  let component: DirectiveStructuralComponent;
  let fixture: ComponentFixture<DirectiveStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveStructuralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
