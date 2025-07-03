import gsap from "gsap";
import { main } from "./main";
import { deleteMemo, insertMemo } from "./service/service";
import type { Tables } from "./supabase/database.types";

let draggingEl: HTMLElement | null = null;

export function handleDragStart(e:DragEvent) {
  const target = e.target as HTMLElement;
  const memo = target?.closest('.memo') as HTMLElement;
  if (memo && e.dataTransfer) {
    draggingEl = memo;
    e.dataTransfer!.effectAllowed = 'move'
      // drag event에 있는 메서드: 데이터, 파일 등 무엇을 이동시킬 것인지 지정

    memo.classList.add('dragging');
  }
}

/* 
  드래그 중이지 않은 element와 (draggableEl)
  해당 element들의 위치를 찾아서 (getBoundingClientRect())
  현재 마우스의 위치가 (y = e.clientY)
  draggableEl 크기의 절반을 넘으면 (offset)
  해당 draggableEl을 return
 */
function getDragAfterElement(container:HTMLElement, y:number):HTMLElement | null {
  const draggableEl = [...container.querySelectorAll('.memo:not(.dragging)')] as HTMLElement[];

  return draggableEl.reduce((closest, child) => {
    const box = child.getBoundingClientRect();  // 각 DOM 요소의 위치 정보
    const offset = y - box.top - box.height / 2;

    if(offset < 0 && offset > closest.offset) {
      return { offset, element:child }
    } else {
      return closest;
    }
  }, {offset: -Infinity, element: null as HTMLElement | null}).element;
}

export function handleDragOver(e:DragEvent) {
  e.preventDefault();
  const afterElement = getDragAfterElement(main, e.clientY);

  if(!draggingEl) return;

  /* 바꿔치기 */
  if(afterElement === null) {
    main.appendChild(draggingEl);
  } else {
    main.insertBefore(draggingEl, afterElement);
      // 현재 드래깅 중인 element를 afterElement 앞에 삽입
  }
}

export function handleDragEnd() {
  if(draggingEl) {
    draggingEl.classList.remove('dragging');
    draggingEl = null;
  }
}

export async function handleDelete(e:MouseEvent) {
  const target = e.target as HTMLElement;
  const btn = target.closest('button') as HTMLButtonElement
  const article = target.closest('article') as HTMLElement
  
  if (!target || !btn || !article) return;

  const id = Number(article.dataset.id);

  if(confirm('이 메모를 삭제하시겠습니까?')) {
    deleteMemo(id);
  }
}

export function handleOpenPop() {
  const tl = gsap.timeline()
  .to('#dialog', {autoAlpha: 1, duration:0.2})
  .to('.pop', {y:0, ease:"power3.inOut"})
}

export function handleCreate(e:MouseEvent) {
  e.preventDefault();

  const title = document.querySelector('#title') as HTMLInputElement;
  const description = document.querySelector('#description') as HTMLInputElement;
  const priority = document.querySelector('#priority') as HTMLSelectElement;

  insertMemo({
    title: title.value,
    description: description.value,
    priority: priority.value as Tables<'memo'>["priority"]
  });

  title.value = '';
  description.value = '';
  priority.value = 'high';
}

export function handleClosePop() {
  const tl = gsap.timeline()
  .to('.pop', {y:'100%', ease:"power3.inOut"})
  .to('#dialog', {autoAlpha: 0, duration:0.2})
}