import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInformationComponent } from './container-information.component';

describe('ContainerInformationComponent', () => {
  let component: ContainerInformationComponent;
  let fixture: ComponentFixture<ContainerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
