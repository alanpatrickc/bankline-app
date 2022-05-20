import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentaoNewComponent } from './movimentao-new.component';

describe('MovimentaoNewComponent', () => {
  let component: MovimentaoNewComponent;
  let fixture: ComponentFixture<MovimentaoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentaoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentaoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
