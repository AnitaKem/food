import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainSearchComponent } from './plain-search.component';

describe('PlainSearchComponent', () => {
  let component: PlainSearchComponent;
  let fixture: ComponentFixture<PlainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
