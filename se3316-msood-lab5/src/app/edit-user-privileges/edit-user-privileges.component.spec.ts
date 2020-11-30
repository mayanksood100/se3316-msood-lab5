import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserPrivilegesComponent } from './edit-user-privileges.component';

describe('EditUserPrivilegesComponent', () => {
  let component: EditUserPrivilegesComponent;
  let fixture: ComponentFixture<EditUserPrivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserPrivilegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
