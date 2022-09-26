import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeContentComponent } from './prime-content.component';

describe('PrimeContentComponent', () => {
  let component: PrimeContentComponent;
  let fixture: ComponentFixture<PrimeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
