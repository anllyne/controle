import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmaPage } from './confirma.page';

describe('ConfirmaPage', () => {
  let component: ConfirmaPage;
  let fixture: ComponentFixture<ConfirmaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
