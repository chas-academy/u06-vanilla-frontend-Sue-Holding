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

async function loadComponent(path: string): Promise<string> {
  const res = await fetch(path);
  return await res.text();
}

async function loadView(viewName: string) {
  const layout = await loadComponent('/components/layout.html');
  const header = await loadComponent('/components/header.html');
  const footer = await loadComponent('/components/footer.html');
  const view = await loadComponent(`/views/${viewName}.html`);
  
  // Render layout first
  document.body.innerHTML = layout;

  // Inject components into layout slots
  (document.getElementById('header-slot') as HTMLElement).innerHTML = header;
  (document.getElementById('footer-slot') as HTMLElement).innerHTML = footer;
  (document.getElementById('page-content') as HTMLElement).innerHTML = view;
}

// Load the "home" view by default
loadView('home');
