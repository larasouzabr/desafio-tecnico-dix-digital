import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunistsPageComponent } from './colunists-page.component';

describe('SectionPageComponent', () => {
  let component: ColunistsPageComponent;
  let fixture: ComponentFixture<ColunistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColunistsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColunistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
