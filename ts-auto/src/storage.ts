// todos 데이터를 로컬스토리지에 저장해주세요.

import { StorageKey, type TodoList } from "./type";

export function saveStorage(todos:TodoList):void {
  const todoItem = JSON.stringify(todos);
  localStorage.setItem(StorageKey.TODO, todoItem);
}

// localStorage에서 데이터를 꺼내고, 꺼낸 데이터를 화면에 렌더링 해주세요.

export function loadStorage():TodoList {
  const todoItem = localStorage.getItem(StorageKey.TODO);
  const todos = todoItem ? JSON.parse(todoItem) : [];
  return todos;
}