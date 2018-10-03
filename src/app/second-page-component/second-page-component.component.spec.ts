import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageComponentComponent } from './second-page-component.component';

describe('SecondPageComponentComponent', () => {
  let component: SecondPageComponentComponent;
  let fixture: ComponentFixture<SecondPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
