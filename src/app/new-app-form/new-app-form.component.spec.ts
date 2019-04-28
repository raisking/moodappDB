import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppFormComponent } from './new-app-form.component';

describe('NewAppFormComponent', () => {
  let component: NewAppFormComponent;
  let fixture: ComponentFixture<NewAppFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
