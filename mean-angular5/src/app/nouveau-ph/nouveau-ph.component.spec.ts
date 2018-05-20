import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPHComponent } from './nouveau-ph.component';

describe('NouveauPHComponent', () => {
  let component: NouveauPHComponent;
  let fixture: ComponentFixture<NouveauPHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
