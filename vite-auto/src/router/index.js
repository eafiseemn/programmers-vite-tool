import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import NotFound from "/src/pages/NotFound";

import gsap from 'gsap';

const routes = {
  '/' : Home,
  '/about' : About,
  '/contact' : Contact,
}

export async function router() {
  const path = location.pathname;
  // const app = document.querySelector('#app');
  const layout = document.querySelector('#layout');

  gsap.defaults({
    ease: 'power3.inOut',
    duration: 0.8
  })
  await gsap.to(layout, { opacity: 1, x: "-100%" })

  const render = routes[path] || NotFound;

  layout.innerHTML = '';
  layout.insertAdjacentHTML("beforeend", render());

  gsap.fromTo(layout, { opacity: 0, x: "100%" }, { opacity: 1, x: 0 })
  
  // const links = this.shadowRoot.querySelectorAll('a');
  // links.forEach(a => a.classList.remove('currentPage'));
  // e.target.classList.add('currentPage');
}

export function navigate(path) {
  history.pushState({}, '', path);
  router();
}

window.addEventListener('popstate', router);