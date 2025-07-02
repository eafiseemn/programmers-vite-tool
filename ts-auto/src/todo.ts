import { loadStorage, saveStorage } from "./storage";

export function addTodo(content:string):void {
  const todos = loadStorage();

  const newTodo = {
    id: Date.now(),
    content: content,
    completed: false,
  }

  todos.push(newTodo);
  saveStorage(todos);
}

export function deleteTodo(id:number):void {
  let todos = loadStorage();

  todos = todos.filter(todoItem => todoItem.id !== id)
  saveStorage(todos);
}

export function toggleTodo(id:number):void {
  let todos = loadStorage();
  todos = todos.map(todoItem => 
    (todoItem.id === id)
      ? {...todoItem, completed: !todoItem.completed} 
      : todoItem
  );
  saveStorage(todos);
}

export function updateTodo(id:number, newContent:string):void {
  let todos = loadStorage();
  todos = todos.map(todoItem => 
    (todoItem.id === id && todoItem.content !== newContent)
      ? {...todoItem, content: newContent}
      : todoItem
  );
  saveStorage(todos);
}