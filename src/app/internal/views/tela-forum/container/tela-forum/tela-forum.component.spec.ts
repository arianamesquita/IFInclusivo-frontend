import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaForumComponent } from './tela-forum.component';

describe('TelaForumComponent', () => {
  let component: TelaForumComponent;
  let fixture: ComponentFixture<TelaForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaForumComponent]
    });
    fixture = TestBed.createComponent(TelaForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
