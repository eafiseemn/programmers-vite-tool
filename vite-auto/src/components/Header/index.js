import { navigate } from "/src/router/index";
import { HeaderLink } from "/src/components/header/Link";

export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.linkList = [
      { to: '/', label: 'HOME' },
      { to: '/about', label: 'ABOUT' },
      { to: '/contact', label: 'CONTACT' },
    ]
    
    this.render();

    this.links = [...this.shadowRoot.querySelectorAll('header-link')];
    this.headerLinks = this.links.map((link) => link.shadowRoot.querySelector('a'));
    this.attachEvent();
  }

  handleRouter(e) {
    e.preventDefault();
    navigate(e.target.href);

    this.headerLinks.forEach(link => link.classList.remove("currentPage"));
    e.target.classList.add("currentPage")
  }

  attachEvent() {
    this.headerLinks.forEach((link) => link.addEventListener('click', this.handleRouter.bind(this)));
  }

  render() {
    const linkItems = this.linkList?.map(({to, label}) => 
      `<header-link to="${to}">${label}</header-link>`).join('');

    this.shadowRoot.innerHTML = `
    <style>
      :host {
        width: 100vw;
      }
      header {
        background-color: pink;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        
        h1 {
          margin: 0;
        }
        
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
      }
    </style>
    <header>
      <h1 class="logo">🐹</h1>
      <nav>
        <ul>
          ${ this.linkList && linkItems }
        </ul>
      </nav>
    </header>
    `
  }
}

{/* <li><a class="currentPage" href="/">HOME</a></li>
<li><a href="/about">ABOUT</a></li>
<li><a href="/contact">CONTACT</a></li> */}