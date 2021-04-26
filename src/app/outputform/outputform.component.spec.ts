import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutputformComponent } from './outputform.component';

describe('OutputformComponent', () => {
  let component: OutputformComponent;
  let fixture: ComponentFixture<OutputformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
