import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraComponent } from './botonera.component';

describe('BotoneraComponent', () => {
  let component: BotoneraComponent;
  let fixture: ComponentFixture<BotoneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
