// css import (절대경로로 js에 css import 가능)
import '@/style.css';
// module css import
import S from '@/style.module.css';

// node_modules import (경로 없이 바로 가져올 수 있음)
import { getNode, insertLast } from "kind-tiger";

// image asset import (default import)
import jsLogo from '@/assets/js.svg';
import logo_8b from '@/assets/8b.jpg';   // asset 에 hash 붙은 파일이 생성


const app = getNode('#app');
const template = `
  <figure>
    <img src="${jsLogo}" alt="JS Logo" />
    <figcaption class="figure">자바스크립트 로고</figcaption>
  </figure>

  <figure>
    <img width="100px" src="${logo_8b}" alt="8B studio Logo" />
    <figcaption class="${S.figure}">8B Studio 로고</figcaption>
  </figure>
`

insertLast(app, template);
console.log(S);