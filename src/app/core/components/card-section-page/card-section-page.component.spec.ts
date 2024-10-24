import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionPageComponent } from './card-section-page.component';

describe('CardSectionPageComponent', () => {
  let component: CardSectionPageComponent;
  let fixture: ComponentFixture<CardSectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSectionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
