/* -------------------------------------------------------------------------- */
/*                               typeof & keyof                               */
/* -------------------------------------------------------------------------- */

const user = {
  name: 'tiger',
  age: 30,
  gender: 'male',
  address: '남양주시',
};

/* typeof */
type User = typeof user;
// User = { name: string; age: number; gender: string; address: string; }

/* keyof */
type UserKey = keyof User
// UserKey = "name" | "age" | "gender" | "address"


/* typeof + keyof */
const settings = {
  theme: 'dark',
  fontSize: 16,
  language: 'ko',
}

type SettingsKey = keyof typeof settings

// typeof 뒤에는 반드시 자바스크립트 객체가 와야 함
// keyof 뒤에는 타입스크립트의 type이 와야 함


// 보통 비동기통신 후 
// type Response = typeof response 같은 형태로 사용