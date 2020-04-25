import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsgalleryComponent } from './picsgallery.component';

describe('PicsgalleryComponent', () => {
  let component: PicsgalleryComponent;
  let fixture: ComponentFixture<PicsgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
