import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrisComponent } from './dris.component';

describe('DrisComponent', () => {
  let component: DrisComponent;
  let fixture: ComponentFixture<DrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
