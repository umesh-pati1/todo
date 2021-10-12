import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  newTodo = '';
  todos = [
    {
      title: 'todo1',
      edit: false,
    },
    {
      title: 'todo1',
      edit: false,
    },
    {
      title: 'todo1',
      edit: false,
    },
    {
      title: 'todo1',
      edit: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    console.log(this.newTodo)
    this.todos.push({
      title: this.newTodo,
      edit: false,
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  editTodo(id: number) {
    this.todos[id].edit = true;
  }

  disableEdit(id: number) {
    this.todos[id].edit = false;
  }
}
