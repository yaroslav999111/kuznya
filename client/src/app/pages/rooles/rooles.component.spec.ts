import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoolesComponent } from './rooles.component';

describe('RoolesComponent', () => {
  let component: RoolesComponent;
  let fixture: ComponentFixture<RoolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
