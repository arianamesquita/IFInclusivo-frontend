import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiaComponent } from './midia.component';

describe('MidiaComponent', () => {
  let component: MidiaComponent;
  let fixture: ComponentFixture<MidiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidiaComponent]
    });
    fixture = TestBed.createComponent(MidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
