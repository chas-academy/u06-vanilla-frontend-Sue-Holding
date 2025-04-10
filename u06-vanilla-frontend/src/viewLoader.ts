// src/components/viewLoader.ts

async function loadComponent(path: string): Promise<string> {
    const res = await fetch(path);
    return await res.text();
  }
  
  export async function loadView(viewName: string) {
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
  