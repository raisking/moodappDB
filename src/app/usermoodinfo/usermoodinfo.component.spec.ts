import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermoodinfoComponent } from './usermoodinfo.component';

describe('UsermoodinfoComponent', () => {
  let component: UsermoodinfoComponent;
  let fixture: ComponentFixture<UsermoodinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermoodinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermoodinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
