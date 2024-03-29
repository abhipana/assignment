import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputformComponent } from './inputform.component';

describe('InputformComponent', () => {
  let component: InputformComponent;
  let fixture: ComponentFixture<InputformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
