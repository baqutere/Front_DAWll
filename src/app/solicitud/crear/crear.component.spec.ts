import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCrearComponent } from './crear.component';

describe('SolicitudCrearComponent', () => {
  let component: SolicitudCrearComponent;
  let fixture: ComponentFixture<SolicitudCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudCrearComponent]
    });
    fixture = TestBed.createComponent(SolicitudCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
