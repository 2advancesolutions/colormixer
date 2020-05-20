import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMixerComponent } from './color-mixer.component';

describe('ColorMixerComponent', () => {
  let component: ColorMixerComponent;
  let fixture: ComponentFixture<ColorMixerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorMixerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorMixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
