import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateNgComponent } from './animate-ng.component';

describe('AnimateNgComponent', () => {
  let component: AnimateNgComponent;
  let fixture: ComponentFixture<AnimateNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
