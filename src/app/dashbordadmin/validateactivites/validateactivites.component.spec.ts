import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateactivitesComponent } from './validateactivites.component';

describe('ValidateactivitesComponent', () => {
  let component: ValidateactivitesComponent;
  let fixture: ComponentFixture<ValidateactivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateactivitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateactivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
