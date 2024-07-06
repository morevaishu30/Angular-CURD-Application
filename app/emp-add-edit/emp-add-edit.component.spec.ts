import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPAddEditComponent } from './emp-add-edit.component';

describe('EMPAddEditComponent', () => {
  let component: EMPAddEditComponent;
  let fixture: ComponentFixture<EMPAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMPAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
