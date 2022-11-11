import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarSessionComponent } from './cerrar-session.component';

describe('CerrarSessionComponent', () => {
  let component: CerrarSessionComponent;
  let fixture: ComponentFixture<CerrarSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerrarSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerrarSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
