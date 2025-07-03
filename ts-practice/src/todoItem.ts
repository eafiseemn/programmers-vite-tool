import { loadStorage, saveStorage } from "./storage"
import type { TodoItem, TodoList } from "./type";

export function addTodo(newContent:string):void {
  const todoList = loadStorage();
  const todoItem:TodoItem = {
    id: Date.now(),
    content: newContent,
    completed: false,
  }
  todoList.push(todoItem);
  saveStorage(todoList);
}

export function deleteTodo(id:number):void {
  let todoList:TodoList = loadStorage();
  todoList = todoList.filter(todoItem => todoItem.id !== id);
  saveStorage(todoList);
}

export function checkTodo(id:number):void {
  let todoList:TodoList = loadStorage();
  todoList = todoList.map(todoItem => 
    (todoItem.id === id) ? {...todoItem, completed: !todoItem.completed} : todoItem
  )
  saveStorage(todoList);
}

export function updateTodo(id:number, newContent:string):void {
  let todoList:TodoList = loadStorage();
  todoList = todoList.map(todoItem => 
    (todoItem.id === id && todoItem.content !== newContent) 
    ? {...todoItem, content:newContent} : todoItem
  );
  saveStorage(todoList);
}