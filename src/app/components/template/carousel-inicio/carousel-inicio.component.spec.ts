import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInicioComponent } from './carousel-inicio.component';

describe('CarouselInicioComponent', () => {
  let component: CarouselInicioComponent;
  let fixture: ComponentFixture<CarouselInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
