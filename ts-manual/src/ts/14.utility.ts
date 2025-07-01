/* -------------------------------------------------------------------------- */
/*                                Utility Type                                */
/* -------------------------------------------------------------------------- */


/* Omit<T,K> */
// 특정 속성은 제외

type User = {
  id: number;
  name: string;
  email: string;
}

type PublicUser = Omit<User, "email">;

// const user:Omit<User, "email"> = {
const user:PublicUser = {
  id: 1,
  name: 'tiger',
}


/* Pick<T,K> */
// 특정 속성만 선택
const user2:Pick<User, "id"|"name"> =  {
  id: 2,
  name: 'beom',
}


/* Partial<T> */
// 모든 값을 optional 로 만듦
type User3 = {
  id: number;
  name: string;
  email?: string;
  address: {
    lat: number;
    long: number;
  }
}

const user3:Partial<User3> = {
  name: 'sunny'
}


/* Required<T> */
// 모든 속성(optional로 지정된 속성 포함)을 required로 변환
const user5:Required<User3> = {
  id: 5,
  name: 'tiger',
  email: 'tiger@gmail.com',
  address: {
    lat: 20,
    long: 42.5
  }
}
user5["id"] = 7;


/* Readonly<T> */
// 모든 속성을 readonly 로 변환
const user6:Readonly<User3> = {
  id: 6,
  name: 'tiger',
  email: 'tiger@gmail.com',
  address: {
    lat: 20,
    long: 42.5
  }
}

// user6["id"] = 7;    // error: 읽기 전용 속성이므로 'id'에 할당할 수 없습니다.



/* Record<K,V> */
// K로 구성된 객체를 만들고, 각 값은 V 타입으로 지정

type Role = keyof typeof access;
type RoleStatus = Record<Role, boolean>;
// type RoleStatus = Record<Role, boolean | string>;

const access = {
  admin: true,
  user: true,
  guest: false,
} as const;