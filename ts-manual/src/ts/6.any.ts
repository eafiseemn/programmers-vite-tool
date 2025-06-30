/* -------------------------------------------------------------------------- */
/*                                  Any Type                                  */
/* -------------------------------------------------------------------------- */

/* any */
let obj:any;

obj = 1;
obj = 'a';
obj = {x: 10};
obj = [1,2,3];
obj = () => {};
obj.toUpperCase();
obj.toFixed();


/* unknown */
let arr: unknown;

arr = 1;
arr = 'hello';
arr = {x: 20};
arr = [1,2,3];
arr = () => {};
// arr.toUpperCase();    // error: 'arr'는 'unknown' 형식입니다.
// arr.toFixed();        // error: 'arr'는 'unknown' 형식입니다.

/* 타입 좁히기 (narrowing) */
if(typeof arr === 'string') arr.toUpperCase();
if(typeof arr === 'number') arr.toFixed();

