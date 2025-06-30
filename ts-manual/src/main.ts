import { _sum } from "./sub";

const a = 10;
const b = _sum(2, 6);

const sum = (a: number, b:number) => a+b;

function greeting(user: string) {
  return `${user} 님 반갑습니다 :)`
}

// export {};  
  // main / sub 파일을 각각 독립적 모듈 형태로 인식시키면 함수명이 겹쳐도 에러가 나지 않음
  // 또는 tsconfig 에서 설정 변경 (moduleDetection = "force")