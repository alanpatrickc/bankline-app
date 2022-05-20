import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentaoListComponent } from './movimentao-list.component';

describe('MovimentaoListComponent', () => {
  let component: MovimentaoListComponent;
  let fixture: ComponentFixture<MovimentaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
