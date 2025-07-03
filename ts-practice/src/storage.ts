import { StorageKey, type TodoList } from "./type";

export function saveStorage(todoList:TodoList):void {
  localStorage.setItem(StorageKey.TODO, JSON.stringify(todoList));
}

export function loadStorage():TodoList {
  const storedItem = localStorage.getItem(StorageKey.TODO);
  const todoList = storedItem ? JSON.parse(storedItem) : [];
  return todoList;
}