
/* -------------------------------------------------------------------------- */
/*                                     복습                                    */
/* -------------------------------------------------------------------------- */

// 1. 다음 함수의 타입 T를 사용하여 반환 타입을 알맞게 채워보세요.

function wrapValue<T>(value: T):{value: T}{
  return { value };
}
// 사용 예시
const wrapped = wrapValue(123);  // wrapped.value는 number



// 2. 다음 getFirstElement 함수는 어떤 타입의 배열을 받아도 첫 번째 요소를 반환해야 합니다.
// 제네릭을 사용하여 타입을 완성해보세요!

function getFirstElement<T>(arr: T[]):T | undefined {
  return arr[0];
}
getFirstElement([]);
getFirstElement(['a','b','c']);
getFirstElement([1,2,3]);



// 3. 아래 함수는 value가 객체일 경우에만 Object.keys()를 호출해야 하고,
// 그 외 타입이면 빈 배열을 반환해야 합니다.
// 이 함수의 리턴 타입을 제네릭 + 조건부 타입으로 정확하게 지정해보세요.

function getObjectKeys<T extends object>(value: T): string[] 
function getObjectKeys(value: any): string[] {
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value);
  }
  return [];
}


/* 실습 문제 1: 유저 목록 필터링 함수 */

// 조건:
// - 아래 User 타입을 참고해서
// - 주어진 유저 배열에서 특정 country에 속한 유저만 골라서 반환하는 함수 filterUsersByCountry를 작성하세요.
// - 반환 타입은 User[]로 지정하고, 함수에 적절한 타입 주석을 작성하세요.

type Country = 'KR' | 'US' | 'JP';

type User = {
  id: number;
  name: string;
  age: number;
  country: Country;
};

const users: User[] = [
  { id: 1, name: 'Alice', age: 28, country: 'KR' },
  { id: 2, name: 'Bob', age: 32, country: 'US' },
  { id: 3, name: 'Kana', age: 25, country: 'JP' },
];

// 👉 여기에 함수 구현
const filterUsersByCountry = (users:User[], country:Country): User[] => {
  return users.filter(user => user.country === country);
}



/* 실습 문제 2: 안전한 get 함수 만들기 (제네릭) */

// 조건:
// - 객체 obj와 key를 받아서, 해당 key의 값을 안전하게 반환하는 함수 getValue를 구현하세요.
// - key가 obj의 키 중 하나일 때만 동작해야 하며, value의 타입도 정확히 반환되도록 제네릭을 사용하세요.
// - 예: getValue({name: 'Emily', age: 30}, 'name') → 'Emily'

// function getValue<T extends object, K extends keyof T> (obj:T, key: K):T[K] | undefined {
//   if(Object.keys(obj).includes(key as string)) return obj[key];
//   else return undefined;
// }

function getValue<T extends object, K extends keyof T> (obj:T, key: K):T[K] | undefined {
  if(key in obj) return obj[key];
  else return undefined;
}


/* 실습 문제 3: 타입 좁히기 + 반환 타입 다르게 */

// 조건:
// - 매개변수로 string 또는 number를 받고,
// - string이면 문자열 길이, number이면 제곱값을 반환하는 함수 getInfo를 작성하세요.
// - 적절한 타입 가드를 사용해 구현하세요.

function getInfo (value: string | number):number {
  if (typeof value === 'string') return value.length;
  else if (typeof value === 'number') return value ** 2;
  else throw new TypeError('Parameter of getInfo Function must be either string or number type.')
}
