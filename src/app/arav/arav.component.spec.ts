import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AravComponent } from './arav.component';

describe('AravComponent', () => {
  let component: AravComponent;
  let fixture: ComponentFixture<AravComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AravComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AravComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
