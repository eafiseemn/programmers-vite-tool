export interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

export type TodoList = TodoItem[];

export enum StorageKey {
  TODO = "TodoList",
}