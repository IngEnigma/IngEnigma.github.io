import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguagesComponent } from './lenguages.component';

describe('LenguagesComponent', () => {
  let component: LenguagesComponent;
  let fixture: ComponentFixture<LenguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
