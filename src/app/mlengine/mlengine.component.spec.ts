import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlengineComponent } from './mlengine.component';

describe('MlengineComponent', () => {
  let component: MlengineComponent;
  let fixture: ComponentFixture<MlengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlengineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
