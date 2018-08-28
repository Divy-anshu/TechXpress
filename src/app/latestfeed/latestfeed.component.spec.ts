import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestfeedComponent } from './latestfeed.component';

describe('LatestfeedComponent', () => {
  let component: LatestfeedComponent;
  let fixture: ComponentFixture<LatestfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
