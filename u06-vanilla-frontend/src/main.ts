import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

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

(window as any).loadFeature = (featureName: string) => {
  const box = document.getElementById('feature-box');
  if (!box) return;

  if (featureName === 'search') {
    box.innerHTML = `
      <h3>Search for Animals</h3>
      <input type="text" placeholder="Type an animal name..." style="padding: 0.5rem; width: 80%;">
    `;
  } else if (featureName === 'game') {
    box.innerHTML = `
      <h3>Guess the Animal</h3>
      <p>Click to start the game!</p>
      <button onclick="alert('Game coming soon!')" style="padding: 0.5rem 1rem;">Start</button>
    `;
  } else if (featureName === 'favourite') {
    box.innerHTML = `
      <h3>Your Favourite Animals</h3>
      <p>Click on any animal to learn more!</p>
    `;
  } else {
    box.innerHTML = `<p>Feature not found.</p>`;
  }
};

(window as any).loadView = loadView;

// Load the "home" view by default
loadView('home');
