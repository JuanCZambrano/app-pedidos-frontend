import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAltComponent } from './logo-alt.component';

describe('LogoAltComponent', () => {
  let component: LogoAltComponent;
  let fixture: ComponentFixture<LogoAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
