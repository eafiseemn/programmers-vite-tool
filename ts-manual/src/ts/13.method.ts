/* -------------------------------------------------------------------------- */
/*                                Array Methods                               */
/* -------------------------------------------------------------------------- */

const arr = [1,2,3];

const newArray = arr.map((item, index) => {
  return item * index;
});


/* Array.prototype.map() */
type Map = <T,U>(arr:T[], callbackFn:(item:T) => U) => U[];

const map:Map = (arr, callbackFn) => {
  let result = [];
  for(const a of arr) {
    result.push(callbackFn(a));
  }
  return result;
}

map(arr, (n) => n * 3);
map(['a','b','c'], (str) => str + "_");


/* Array.prototype.forEach() */
type ForEachCallback<T> = (item:T, index:number) => void;
type ForEach = <T>(arr:T[], callbackFn:ForEachCallback<T>) => void;

const forEach:ForEach = (arr, callbackFn) => {
  let i = 0;
  for(const a of arr) {
    callbackFn(a, i++);
  }
}

forEach(arr, (a) => console.log(a));


/* Array.prototype.filter() */
interface FilterCallback<T> { (item:T, index:number): boolean };
interface Filter { <T>(arr:T[], callbackFn:FilterCallback<T>): T[] }; 

const filter:Filter = (arr, callbackFn) => {
  let result = [];
  let i = 0;
  for(const item of arr) {
    if(callbackFn(item, i++)) result.push(item);
  }
  return result;
}


/* Array.prototype.reduce() */
interface ReduceCallback<T, U> { (previousValue:(T | U), currentValue:T, currentIndex:number): U}
type Reduce = <T, U>(arr:T[], callbackFn:ReduceCallback<T, U>, initial:U) => U;

const reduce:Reduce = (arr, callbackFn, initial) => {
  // let acc = (initial || arr[0]);
  let acc = initial;
  let i = 0;
  for(const item of arr) {
    acc = callbackFn(acc, item, i++);
  }
  return acc;
}


reduce(arr, (acc, cur)=> acc*cur, 1);