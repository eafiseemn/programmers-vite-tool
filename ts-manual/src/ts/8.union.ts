/* -------------------------------------------------------------------------- */
/*                                 Union Type                                 */
/* -------------------------------------------------------------------------- */

let str: 'name' | 'age' | 'address' = 'name';
str = 'age';
// str = 'hello'  // error


type CompanyA = {
  companyName: string;
  since: number;
}

const company1:CompanyA | {ceo:string} = {
  companyName: '8b-studio',
  since: 2022,
  // ceo: 'tiger'
}
// & {ceo} 로 넣으면 반드시 존재해야하는 값, | {ceo} 로 넣으면 없어도 되는 값

