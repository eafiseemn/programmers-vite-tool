/* -------------------------------------------------------------------------- */
/*                              Promise Function                              */
/*                                  Practice                                  */
/* -------------------------------------------------------------------------- */

import type { Pokemon } from "./pokemonType";

const END_POINT = "https://pokeapi.co/api/v2/pokemon";

// fetchData 함수를 만들고 타입을 지정해주세요.
async function fetchData(url:string):Promise<Pokemon> {
  const response = await fetch(url+"/25");
  const data = await response.json();
  return data;
}

fetchData(END_POINT);




// Create Card
function createImageCard({sprites, name}:Pick<Pokemon, "sprites" | "name">):string {
  const tag = `
    <div class="cardContainer">
      <h2>${name}</h2>
      <img src="${sprites['front_default']}" alt="${name}" />
    </div>
  `
  return tag;
}

// Render Card
function renderImageCard(target:string | HTMLElement | null, data:Pick<Pokemon, "sprites" | "name">) {
  const el =
    typeof target === 'string' ? document.querySelector(target) : target;
  if (!(el instanceof HTMLElement)) return;

  const tag = createImageCard(data);
  el.insertAdjacentHTML('beforeend', tag);

  // target && target.insertAdjacentHTML('befoerend', createImageCard(data))
  // 형태의 논리곱으로도 작성 가능
}


function fetchPokemon() {
  const arr:Promise<Pokemon>[] = [];

  Array(10).fill(null).forEach((_, idx) => {
    const url = `${END_POINT}/${idx + 1}`
    arr.push(fetch(url).then((res) => res.json()));
  })

  return arr;
}

function createPokemonObject(arr:Promise<Pokemon>[]) {
  // arr = [Promise,Promise,Promise,Promise,Promise,...Promise]
  // 각 Promise 가 모두 응답을 받을 때까지 기다렸다가 실행하는 것: all
  // Promise.all(arr) 하면 fulfilled Promise 의 배열 return
  let pokemon:unknown;
  Promise.all(arr).then((all) => {
    pokemon = all.map(p => ({
        name: p.name,
        image: p.sprites['front_default']
      }))
  })
  return pokemon;  
}

createPokemonObject(fetchPokemon());