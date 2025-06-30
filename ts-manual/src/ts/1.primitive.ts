/* -------------------------------------------------------------------------- */
/*                         Typescript 자료형 (Primitive)                        */
/* -------------------------------------------------------------------------- */

// number, string, boolean, null, undefined

/* number type */
const num1 = 10;   // 고정된 값(10)을 받음
let num2 = 10;     // type: number 로 설정됨
// num2 = '100';   // error: 'string' 형식은 'number' 형식에 할당할 수 없습니다.
let num3:number = 10; // 가독성을 위해 타입 지정
let num4:number = NaN;
let num5:number = -123;
let num6:number = 0.123123;
let num7:number = Infinity;


/* string type */
let str1 = 'hi';
let str2 = "hello";
// str2 = 123 // error: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
let str3 = `hola ${num1}`;


/* boolean type */
let bool1 = true;
let bool2:boolean = false;


/* null */
let nullA = null;       // type = any
nullA = 10;             // 에러 없음
let nullB:null = null;  // type 강제
// nullB = "null"          // error: null 형식에 할당할 수 없습니다.


/* undefined */
let undef:undefined = undefined;   // 다른 값 할당할 수 없음


/* unknown */
let unknown:unknown;
unknown = 'hello';


/* never */
let never:never;
// never = '';
// never = 0;
// never = false;
// never = null;
// never = undefined;
    // 어떤 값도 할당할 수 없음
    // 콘솔 제어, 에러 등에 많이 씀


/* any */
let any:any;




/* literal type */
let numA:10 = 10;
// numA = 100;       // '100' 형식은 '10' 형식에 할당할 수 없습니다.
                     // 값을 강제하는 const 처럼 동작
let strA:"hello" = "hello";
// strA = "hi";

let boolA:true = true;
// boolA = false;

const userInfo:{ name:'emily', [key: string]: any } = {
  "name": 'emily',
  age: 30,
  job: "FE Engineer"
}

// userInfo.name = "bob";   // error: 'bob' 형식은 'emily' 형식에 할당할 수 없습니다.
userInfo.age = '35';