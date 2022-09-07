import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllTodoComponent } from './delete-all-todo.component';

describe('DeleteAllTodoComponent', () => {
  let component: DeleteAllTodoComponent;
  let fixture: ComponentFixture<DeleteAllTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
