import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import testPage from './testpage.html'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>

  <h2>hello sue</h2>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const app = document.getElementById('app');

async function loadView(view: string) {
  const res = await fetch(`/views/${view}.html`);
  const html = await res.text();
  if (app) app.innerHTML = html;
}

// Load the "home" view by default
loadView('home');
