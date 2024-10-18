import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSistemaComponent } from './info-sistema.component';

describe('InfoSistemaComponent', () => {
  let component: InfoSistemaComponent;
  let fixture: ComponentFixture<InfoSistemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSistemaComponent]
    });
    fixture = TestBed.createComponent(InfoSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
