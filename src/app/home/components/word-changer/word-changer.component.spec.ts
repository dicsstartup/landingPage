import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordChangerComponent } from './word-changer.component';

describe('WordChangerComponent', () => {
  let component: WordChangerComponent;
  let fixture: ComponentFixture<WordChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
