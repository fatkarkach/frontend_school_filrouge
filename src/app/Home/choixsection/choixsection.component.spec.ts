import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixsectionComponent } from './choixsection.component';

describe('ChoixsectionComponent', () => {
  let component: ChoixsectionComponent;
  let fixture: ComponentFixture<ChoixsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
