import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputformComponent } from './outputform.component';

describe('OutputformComponent', () => {
  let component: OutputformComponent;
  let fixture: ComponentFixture<OutputformComponent>;

  beforeEach(async(() => {
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
