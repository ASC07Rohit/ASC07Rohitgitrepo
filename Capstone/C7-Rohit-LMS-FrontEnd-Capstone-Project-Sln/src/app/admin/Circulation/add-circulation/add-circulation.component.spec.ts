import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCirculationComponent } from './add-circulation.component';

describe('AddCirculationComponent', () => {
  let component: AddCirculationComponent;
  let fixture: ComponentFixture<AddCirculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCirculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCirculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
