import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakereviewpanelComponent } from './fakereviewpanel.component';

describe('FakereviewpanelComponent', () => {
  let component: FakereviewpanelComponent;
  let fixture: ComponentFixture<FakereviewpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakereviewpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakereviewpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
