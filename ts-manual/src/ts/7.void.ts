/* -------------------------------------------------------------------------- */
/*                                  Void Type                                 */
/* -------------------------------------------------------------------------- */

// 함수의 type: return 값의 속성 추가
function sayHi(message:string = ""):string {
  return `Hello! ${message}`
}

/* void type */
// return이 없는 경우: void 로 선언
function printHi():void {
  console.log('Hello!');
}

/* never type */
// 존재하지 않는 / 불가능한 / 어떤 값도 정의할 수 없는 타입

function showError(message: string):never {
  throw new Error(message);
}

function infiniteLoop():never {
  while (true) {
    //
  }
}

/* generic function */
// iterator protocol / lazy loop
// => 일반 반복문에 비해 성능 향상

function* gen():Generator<number, void, void> {
  let count = 0;
  while (true) {
    yield count++;
  }
}