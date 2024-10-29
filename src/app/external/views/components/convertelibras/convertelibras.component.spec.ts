import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertelibrasComponent } from './convertelibras.component';

describe('ConvertelibrasComponent', () => {
  let component: ConvertelibrasComponent;
  let fixture: ComponentFixture<ConvertelibrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertelibrasComponent]
    });
    fixture = TestBed.createComponent(ConvertelibrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
