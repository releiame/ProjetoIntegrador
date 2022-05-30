import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCarrouselComponent } from './header-carrousel.component';

describe('HeaderCarrouselComponent', () => {
  let component: HeaderCarrouselComponent;
  let fixture: ComponentFixture<HeaderCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
