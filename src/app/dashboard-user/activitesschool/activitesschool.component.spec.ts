import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesschoolComponent } from './activitesschool.component';

describe('ActivitesschoolComponent', () => {
  let component: ActivitesschoolComponent;
  let fixture: ComponentFixture<ActivitesschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitesschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitesschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
