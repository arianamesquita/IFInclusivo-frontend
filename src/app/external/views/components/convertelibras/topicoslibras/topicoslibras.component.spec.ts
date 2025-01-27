import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoslibrasComponent } from './topicoslibras.component';

describe('TopicoslibrasComponent', () => {
  let component: TopicoslibrasComponent;
  let fixture: ComponentFixture<TopicoslibrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicoslibrasComponent]
    });
    fixture = TestBed.createComponent(TopicoslibrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
