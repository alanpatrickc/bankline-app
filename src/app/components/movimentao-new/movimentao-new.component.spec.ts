import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoNewComponent } from './movimentao-new.component';

describe('MovimentaoNewComponent', () => {
  let component: MovimentacaoNewComponent;
  let fixture: ComponentFixture<MovimentacaoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
