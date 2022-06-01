import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInicioLogComponent } from './header-inicio-log.component';

describe('HeaderInicioLogComponent', () => {
  let component: HeaderInicioLogComponent;
  let fixture: ComponentFixture<HeaderInicioLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInicioLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInicioLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
