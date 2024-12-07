import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCirculationComponent } from './list-circulation.component';

describe('ListCirculationComponent', () => {
  let component: ListCirculationComponent;
  let fixture: ComponentFixture<ListCirculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCirculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCirculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
