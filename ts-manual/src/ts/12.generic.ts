/* -------------------------------------------------------------------------- */
/*                                   Generic                                  */
/* -------------------------------------------------------------------------- */

// Type을 parameter 처럼 사용
type User<Type, U> = {
  name: Type;
  age: U;
}

const user:User<string, number> = {
  name: 'tiger',
  age: 30,
}

// const _user:User<number, string> = {
//   name: 'tiger',      // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
//   age: 30,            // 'number' 형식은 'string' 형식에 할당할 수 없습니다.
// }


function _fn(value:number | string | null | [] ):number | string | null | [] {
  return value;
}

_fn(10);
_fn('hello');
_fn(null);
_fn([]);
// _fn({});
// _fn(10n);
// ... 재사용성을 높이기 위해서는 지정해줘야하는 타입 증가


function fn<T>(value:T):T {
  return value;
}
const fn2 = <T>(value:T):T => value; 

fn(10);
fn('hello');
fn(null);
fn([]);
fn({});
fn(10n);



/* 관습적 제네릭명
 T => Type
 U => Util => Unique
 K => Key
 V => Value
 R => Return Type
 E => Element / Error
 S => State
 */



 
// function swapAtoB(a:number, b:string):(number | string)[] {
function swapAtoB<T, U>(a:T, b:U):[U, T] {
  return [b, a];    // return Tuple ( (T | U)[] 로 쓰면 그냥 배열 )
}

swapAtoB(0, 'a');
swapAtoB([], 'a');


function getLength<T extends {length: number}> (arr:T):number {
  return arr.length;
}

getLength([1,2,3]);
getLength(['a','b','c']);
getLength('hello');
getLength({ length: 10 });    // 객체에 length 속성을 넣으면 조회 가능
// getLength({ "a": 10, "b": 20 });    // 개체 리터럴은 알려진 속성만 지정할 수 있으며 {length} 형식에 "a" 가 없습니다.
// getLength(30);      // error: 'number' 형식의 인수는 '{ length: number; } 형식의 매개변수에 할당될 수 없습니다.
// getLength(null);    // error: 'null' 형식의 인수는 '{ length: number; } 형식의 매개변수에 할당될 수 없습니다.



type Response<T> = T extends string ? {type:string; content:string} : {type:string; content:T};

const r1:Response<string> = { type: 'text', content: 'hello' }
const r2:Response<{name:string}> = { type: 'json', content: {name: 'tiger'} }



function getById<T extends {id:number}> (item: T):number {
  return item.id
}

getById({id: 10, title: 'iPhone'});
getById({id: 20, title: 'Galaxy'});
// getById({title: 'MacBook'});    // error!



// extends + 조건부 조합

type ElementType<T> = T extends (infer U)[] ? U : never;
// infer : inference (형식 추론)
// T 가 배열이 맞으면 배열의 item의 type을 추론해서 U에 할당
// ElementType은 각 요소 하나하나의 type이거나 never

function logFirst<T> (arr:T[]):void {
  const first:ElementType<T[]> = arr[0];
  console.log(first);
}

logFirst(['apple', 'banana']);
logFirst([1,2,3]);


function includesValue<T> (arr:T[], value:ElementType<T[]>):boolean {
  return arr.includes(value);
}

includesValue(['a','b','c'], 'b') // true;
includesValue([1,2,3], 2) // true;
includesValue(['a',2,3], 4) // false;
// includesValue(['a','b','c'], 3) // error: 'number' 형식의 인수는 'string' 형식의 매개변수에 할당될 수 없습니다.


type P<T> = T extends Promise<infer U> ? U : T;