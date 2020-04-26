import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoexitComponent } from './noexit.component';

describe('NoexitComponent', () => {
  let component: NoexitComponent;
  let fixture: ComponentFixture<NoexitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoexitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
