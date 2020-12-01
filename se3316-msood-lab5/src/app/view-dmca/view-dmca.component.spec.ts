import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDmcaComponent } from './view-dmca.component';

describe('ViewDmcaComponent', () => {
  let component: ViewDmcaComponent;
  let fixture: ComponentFixture<ViewDmcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDmcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDmcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
