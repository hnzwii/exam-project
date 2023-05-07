import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesGroupComponent } from './services-group.component';

describe('ServicesGroupComponent', () => {
  let component: ServicesGroupComponent;
  let fixture: ComponentFixture<ServicesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
