/* -------------------------------------------------------------------------- */
/*                              Promise Function                              */
/* -------------------------------------------------------------------------- */

import type { UserData } from "./type";

type User = {name: string; age: number};
type Options = {
  timeout: number;
  condition: boolean;
  data: User[];
}

const defaultOptions = {
  timeout: 1000,
  condition: false,
  data:[{name:'', age:0}],
}

function delayP(options:Partial<Options>):Promise<User[]> {
  // Promise를 반환, <> 안에는 resolve 에 전달되는 PromiseResult 의 type 추가
  const {timeout, condition, data} = {...defaultOptions, ...options};

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(condition) resolve(data);
      else reject({message: "error!"})
    }, timeout);
  })
}

delayP({
  timeout: 2000,
  data:[{name: 'tiger', age: 30}],
})




async function fetchUserData(url:string):Promise<UserData> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const END_POINT = 'https://jsonplaceholder.typicode.com/users';
fetchUserData(END_POINT);