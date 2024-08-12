import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProyectsComponent } from './all-proyects.component';

describe('AllProyectsComponent', () => {
  let component: AllProyectsComponent;
  let fixture: ComponentFixture<AllProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
