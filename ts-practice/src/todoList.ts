/* -------------------------------------------------------------------------- */
/*                               To Do List 만들기                              */
/* -------------------------------------------------------------------------- */

import { loadStorage } from "./storage";
import { addTodo, checkTodo, deleteTodo, updateTodo } from "./todoItem";
import type { TodoList } from "./type";

function createTodoContainer():string {
  const container = /* html */`
    <div class="todo-container">
      <h2>My To Do List</h2>
      <form>
        <label for="todo">할 일:</label>
        <input type="text" id="todo" placeholder="할 일을 입력해보세요!" />
        <button type="submit">추가</button>
      </form>
      <hr />
      <ul id="renderPlace">
      </ul>
    </div>`
  return container;
}

function renderTodoContainer():void {
  document.querySelector("#app")?.insertAdjacentHTML('beforeend', createTodoContainer());
  const form = document.querySelector('form');
  form?.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTodoContainer();
  renderTodoItem();
});

function handleSubmit(e:SubmitEvent):void {
  e.preventDefault();

  const inputForm = document.querySelector('#todo') as HTMLInputElement;
  const inputValue = inputForm?.value.trim();
  if(!inputValue) return;
  
  addTodo(inputValue);
  renderTodoItem();
  inputForm.value = '';
  inputForm.focus();
}

function renderTodoItem():void {
  const ul = document.querySelector('#renderPlace') as HTMLUListElement;
  ul.innerHTML = '';

  const todos:TodoList = loadStorage();
  
  todos.forEach(todoItem => {
    const {id, content, completed} = todoItem;
    const li = document.createElement('li');
    li.dataset.id = String(id);
  
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "isCompleted";
    checkbox.checked = completed;

    const span = document.createElement('span');
    span.innerText = content;
    span.contentEditable = "true";

    const deleteBtn = document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "삭제";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul?.appendChild(li);

    checkbox.addEventListener('change', handleChecked);
    span.addEventListener('blur', handleUpdate);
    span.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        e.preventDefault();
        setTimeout(() => {
          handleUpdate(e);
          span.blur();  
        }, 0);
      }
    })
    deleteBtn.addEventListener('click', handleDelete);
  }) 
}

function handleDelete(e:MouseEvent):void {
  const li = (e.target as HTMLButtonElement)?.closest('li') as HTMLLIElement;
  deleteTodo(Number(li.dataset.id));
  renderTodoItem();
}

function handleChecked(e:Event):void {
  const li = (e.target as HTMLInputElement)?.closest('li') as HTMLLIElement;
  checkTodo(Number(li.dataset.id));
}

function handleUpdate(e:Event):void {
  const input = e.target as HTMLSpanElement;
  const li = input?.closest('li') as HTMLLIElement;
  const newContent = input.innerText.trim();
  if(!li || !newContent) return;
  updateTodo(Number(li.dataset.id), newContent);
}