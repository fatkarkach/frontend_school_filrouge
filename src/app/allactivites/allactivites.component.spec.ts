import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllactivitesComponent } from './allactivites.component';

describe('AllactivitesComponent', () => {
  let component: AllactivitesComponent;
  let fixture: ComponentFixture<AllactivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllactivitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllactivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
