import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404ComponentComponent } from './page404-component.component';

describe('Page404ComponentComponent', () => {
  let component: Page404ComponentComponent;
  let fixture: ComponentFixture<Page404ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
