/* -------------------------------------------------------------------------- */
/*                              Promise Function                              */
/*                                  Practice                                  */
/* -------------------------------------------------------------------------- */

import type { Pokemon } from "./pokemonType";

const END_POINT = "https://pokeapi.co/api/v2/pokemon/25";

// fetchData 함수를 만들고 타입을 지정해주세요.
async function fetchData(url:string):Promise<Pokemon> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData(END_POINT);



