import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguesComponent } from './add-catalogue.component';

describe('CataloguesComponent', () => {
  let component: CataloguesComponent;
  let fixture: ComponentFixture<CataloguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CataloguesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CataloguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
