export class HeaderLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.href = this.getAttribute('to') || '/';
    this.label = this.textContent || '';

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
        a {
          text-decoration: none;
          color: rgb(88, 88, 88);
        }
        a.currentPage {
          color: rgb(94, 104, 189);
        }
    </style>
    <li><a href="${this.href}">${this.label}</a></li>
    `;
  }
}

customElements.define('header-link', HeaderLink);
