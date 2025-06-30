/* -------------------------------------------------------------------------- */
/*                              TypeScript Array                              */
/* -------------------------------------------------------------------------- */

let arr:number[] = [1,2,3];
// arr = [100, 1000, 'a'];   // 'string' 형식은 'number' 형식에 할당할 수 없습니다. 

let str:string[] = 'a,b,c'.split(',');
// str = [1,2,3];  // 'number' 형식은 'string' 형식에 할당할 수 없습니다. 


/* generic type 변수 */
let _arr:Array<number>;
_arr = [1,2,3];
// _arr = ['1','2','3'];     //  'string' 형식은 'number' 형식에 할당할 수 없습니다.

let _str:Array<string> = ['a', 'b', 'c'];


/* union type + array type */
let multi: (string | number | boolean)[] = ['hello', 10, true];
multi = [100, 5, 'false'];  // 자리가 바뀌거나 특정 타입이 없어도 무방


/* tuple type */
// 자리를 정하는 array type
let tupleA:[number, number, number] = [1, 2, 3];
// tupleA = [4, 5]   // error: [number, number] 형식은 [num, num, num] 형식에 할당할 수 없습니다.
let tupleB:[string, number] = ['tiger', 30];
// tupleB = [30, 'emily'];   // error: 자리 바뀜 허용 안함

// 다차원 tuple 배열
const user:[string, number][] = [
  ['심선범', 30],
  ['신선범', 32],
  ['신석범', 34]
]
// user.push([330, 'hi']);    // type error