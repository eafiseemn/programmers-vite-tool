/* -------------------------------------------------------------------------- */
/*                               To Do List 만들기                              */
/* -------------------------------------------------------------------------- */

/*
  1. todoList 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
  2. CSS module을 사용해 스타일링을 해주세요.
  3. 생성된 DOM 요소를 잡아 form 이벤트를 바인딩 해주세요.
  4. input의 value 값을 가져와주세요.
  5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.
 */

import { loadStorage } from './storage';
import { addTodo, deleteTodo, toggleTodo, updateTodo } from './todo';
import type { Todo, TodoList } from './type';
import S from '/src/todo.module.css';

function createTodoContainer():string {
  const container = `
    <div class="${S.container}">
      <h2>My To Do List 🐹</h2>
      <form>
        <label for="todo">할 일 : </label>
        <input type="text" id="todo" />
        <button type="submit">추가</button>
      </form>
      <hr />
      <ul id="renderPlace">
      </ul>
    </div>
  `
  return container
}

function renderTodoContainer():void {
  const target = document.querySelector('#app');
  const container = createTodoContainer();
  target?.insertAdjacentHTML('beforeend',container);

  // const createBtn = target?.querySelector('button');
  // createBtn?.addEventListener('click', handleSubmit);

  const inputForm = target?.querySelector('form') as HTMLFormElement;
  inputForm?.addEventListener('submit', handleSubmit);
}

function handleSubmit(e:SubmitEvent):void {
  e.preventDefault();
  const inputForm = document.querySelector('#todo') as HTMLInputElement;
  const inputValue = inputForm.value.trim();
  if(!inputValue) return;

  addTodo(inputValue);
  renderMultipleTodos();
  inputForm.value = '';
  inputForm.focus();
}

window.addEventListener('DOMContentLoaded', () => {
  renderTodoContainer();
  renderMultipleTodos();
})



// todos 데이터를 2개 이상 추가해서 리스트 렌더링 해주세요.

function renderMultipleTodos() {
  const todos:TodoList = loadStorage();

  const todoList = document.querySelector('#renderPlace') as HTMLUListElement;
  todoList.innerHTML = '';

  todos.forEach((i:Todo) => {
    const {id, content, completed} = i;

    const todoItem = document.createElement('li');
    todoItem.dataset.id = String(id);

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "checkbox"
    checkbox.checked = completed;

    const item = document.createElement('span');
    item.innerText = content;
    item.contentEditable = "true";

    const deleteBtn = document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "삭제";

    todoList.appendChild(todoItem);
    todoItem.appendChild(checkbox);
    todoItem.appendChild(item);
    todoItem.appendChild(deleteBtn);

    checkbox.addEventListener('change', handleCheck);
    item.addEventListener('blur', handleInputChange);
    item.addEventListener('keydown', (e:KeyboardEvent) => {
      if(e.key === 'Enter') {
        e.preventDefault();
        setTimeout(() => {
        handleInputChange(e);
        item.blur();
      }, 0)
    }
    });
    deleteBtn.addEventListener('click', handleDelete);
  });
}


/* 삭제 버튼을 클릭했을 때 데이터 삭제 */
function handleDelete(e:MouseEvent) {
  const li = (e.target as HTMLElement)?.closest('li');
  if (!li) return;
  deleteTodo(Number(li.dataset.id));
  // li.remove();
  renderMultipleTodos();
}

/* 체크박스를 클릭했을 때 데이터 업데이트 */
function handleCheck(e:Event) {
  const li = (e.target as HTMLElement)?.closest('li');
  if (!li) return;
  toggleTodo(Number(li.dataset.id));
}

/* 할 일 내용을 수정했을 때 데이터 업데이트 */
function handleInputChange(e:Event) {
  const span = e.target as HTMLSpanElement;
  const li = span?.closest('li');
  if (!li || !span) return;

  const id = Number(li.dataset.id)
  const newContent = span.innerText.trim();
  if (!newContent) return;

  updateTodo(id, newContent);
}