/* -------------------------------------------------------------------------- */
/*                               Type Assertion                               */
/* -------------------------------------------------------------------------- */

/* DOM Element Type Assertion */
const _input = document.querySelector('#textField');    // Element | Null
// _input.value   // error: input은 null일 수 있습니다.


// 느낌표(!) 를 붙이면: null 이 아니라고 주장
const input1 = document.querySelector('#textField')!;   // Element
// input1.value   // error: 'Element' 형식에 'value' 속성이 없습니다.


// <HTMLInputElement> 를 붙이면: DOM 요소 중 Input Element 라서 value 값이 있다고 주장
const input2 = document.querySelector<HTMLInputElement>('#textField');    // HTMLInputElement || Null
// input2.value    // error: 'input2'는 'null' 일 수 있습니다.


// as HTMLInputElement 를 붙이면: Input Element 이고 Null 이 아니라고 주장
const input3 = document.querySelector('#textField') as HTMLInputElement;  // HTMLInputElement
input3.value

const app = document.querySelector('#app') as HTMLDivElement;


// 좀 더 안전한 방법은:
const input4 = document.querySelector('#textField');
if (input4) {                         // Null이 아니면
  (input4 as HTMLInputElement).value  // Input 창이니까 value 가져와
}



/* 변수 Type Assertion */

// readonly name: string;
const personA: {
  readonly name: string;
  readonly age: number;
} = {
  name: 'tiger',
  age: 30,
}
// personA.name = 'seonbeom'    // 읽기 전용 속성이므로 'name' 에 할당할 수 없습니다.

// readonly name: 'tiger';
const personB = {
  name: 'tiger',
  age: 30,
} as const
// personB.name = 'seonbeom'    // 읽기 전용 속성이므로 'name' 에 할당할 수 없습니다.

