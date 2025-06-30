/* -------------------------------------------------------------------------- */
/*                                 Type Alias                                 */
/* -------------------------------------------------------------------------- */

// TypeScript에서 alias를 정하는 방법: type, interface

/*
// 각 개체마다 속성을 정의하면?

const user1: {
    id: number;
    name: string;
    auth: string;
    isPaid: boolean;
} = {
  id: 1,
  name: 'tiger',
  auth: 'admin',
  isPaid: true,
}

const user2: {
    id: number;
    name: string;
    auth: string;
    isPaid: boolean;
} = {
  id: 2,
  name: 'emily',
  auth: 'visitor',
  isPaid: false,
}

...

  // user가 늘어날수록 코드 낭비 심함
*/

/* type으로 alias 지정 (PascalCase 로 생성) */
type UserInfo1 = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

const user1:UserInfo1 = {
  id: 1,
  name: 'tiger',
  auth: 'admin',
  isPaid: true,
}

// 정의된 타입 확장 : & 사용
type UserInfo2 = UserInfo1 & {address: string};

const user2: UserInfo2 = {
  id: 2,
  name: 'emily',
  auth: 'user',
  isPaid: false,
  address: '강남구'
}

const user3: UserInfo1 & {address: string} = {
  id: 3,
  name: 'beom',
  auth: 'guest',
  isPaid: true,
  address: '남양주시'
}



/* interface로 alias 지정 ('=' 사용하지 않음) */
interface UserInfo3 {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

// interface 확장
// 1. & 로 추가 
  // const user4:UserInfo3 & {address: string} = {...}

// 2. 동일한 이름으로 interface를 정의하면 병합
  // interface UserInfo3 {
  //   address: string
  // }

// 3. extends 확장
interface UserInfo4 extends UserInfo3 {
  address: string
}

const user4:UserInfo4 = {
  id: 4,
  name: 'sunny',
  auth: 'user',
  isPaid: true,
  address: '안양시'
}


/* index signature: 객체의 key가 동적으로 결정될 때의 타입 속성 */
type Person = {
  name: string;
  age: number;
  email: string;
  [key:string]: (string | number);
}

const person:Person = {
  name: 'tiger',
  age: 30,
  email: 'tiger@gmail.com',
  gender: 'male',
  address: '남양주시',
  phone: 1012345678,
}