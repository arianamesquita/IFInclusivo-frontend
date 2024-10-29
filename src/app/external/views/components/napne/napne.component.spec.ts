import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapneComponent } from './napne.component';

describe('NapneComponent', () => {
  let component: NapneComponent;
  let fixture: ComponentFixture<NapneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NapneComponent]
    });
    fixture = TestBed.createComponent(NapneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
