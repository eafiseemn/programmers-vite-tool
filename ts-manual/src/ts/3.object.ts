/* -------------------------------------------------------------------------- */
/*                                   Object                                   */
/* -------------------------------------------------------------------------- */

const user:{
  id?: string;     // Optional Property (id: string | undefined)
  name: string;     // , 또는 ; 모두 사용 가능
  age: number;
} = {
  name: 'tiger',
  age: 30,
}

user.id = 'hello'    // user 형식에 'id' 속성이 없습니다.
// user.password = 123123    // user 형식에 'password' 속성이 없습니다.



/* readonly property */
const config:{readonly apiKey: string} = {
  apiKey: 'asd!0_1239019$Kjs',
}

// config.apiKey = 'aaewrqw0dkvml';    // 읽기 전용 속성이므로 'apiKey' 에 할당할 수 없습니다.
let tempApiKey = config.apiKey;        // 읽기만 가능


