import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAncienEditionComponent } from './home-ancien-edition.component';

describe('HomeAncienEditionComponent', () => {
  let component: HomeAncienEditionComponent;
  let fixture: ComponentFixture<HomeAncienEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAncienEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAncienEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
