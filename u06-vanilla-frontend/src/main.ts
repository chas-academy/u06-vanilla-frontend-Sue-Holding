import './style.css'
import { createUser, loginUser, logoutUser } from './user';
import { searchAnimals, startGame } from './animal';
import { loadView } from './viewLoader';

// Load the "home" view by default
loadView('loginpage');

// Login form logic
document.addEventListener('submit', async (e) => {
  const form = e.target as HTMLFormElement;
  if (form.id === 'login-form') {
    e.preventDefault();

    const nameInput = document.getElementById('login-name') as HTMLInputElement;
    const name = nameInput.value.trim();

    if (!name) {
      alert('Please enter your name!');
      return;
    }

    try {
      const user = await loginUser(name);
      console.log('User logged in:', user);
      loadView('home');
    } catch (err: any) {
      alert(err.message);
    }
  }
});

// User creation logic
document.addEventListener('submit', async (e) => {
  const form = e.target as HTMLFormElement;
  if (form.id === 'createUser-form') {
    e.preventDefault();

    const nameInput = document.getElementById('register-name') as HTMLInputElement;
    const name = nameInput.value.trim();

    if (!name) {
      alert('Please enter your name!');
      return;
    }

    try {
      const user = await createUser(name);
      console.log('User created:', user);
      loadView('home');
    } catch (err: any) {
      alert(err.message);
    }
  }
});

// Logout logic
document.addEventListener('submit', async (e) => {
  const form = e.target as HTMLFormElement;
  if (form.id === 'login-form') {
    e.preventDefault();

    const nameInput = document.getElementById('login-name') as HTMLInputElement;
    const name = nameInput.value.trim();

    if (!name) {
      alert('Please enter your name!');
      return;
    }

    try {
      const user = await loginUser(name);
      console.log('User logged in:', user);
      loadView('home');
    } catch (err: any) {
      alert(err.message);
    }
  }
});

// Event listener for search and other features
(window as any).loadFeature = (featureName: string) => {
  const box = document.getElementById('feature-box');
  if (!box) return;

  if (featureName === 'search') {
    box.innerHTML = `
      <h3 class="text-xl font-bold mb-2">Search for Animals</h3>
      <input type="text" id="search-input" placeholder="Type an animal name..." class="p-2 w-4/5 rounded border border-blue-500">
      <input type="submit" id="search-all" value="Search all animals" class="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer">
       <div id="search-results" class="mt-4"></div>
    `;
    
    requestAnimationFrame(() => {
      const searchBtn = document.getElementById("search-all");
      const input = document.getElementById("search-input") as HTMLInputElement;
      const results = document.getElementById("search-results");

      if (!searchBtn || !input || !results) return;

      searchBtn.addEventListener("click", async () => {
        try {
          const filtered = await searchAnimals(input.value);
          results.innerHTML = `
            <h4 class="font-semibold">Search Results:</h4>
            <ul class="list-disc ml-4">
              ${filtered.map((a: any) => `<li>${a.name} - ${a.habitat}</li>`).join("")}
            </ul>
          `;
        } catch (err: any) {
          alert("Error fetching animals: " + err.message);
        }
      });
    });
  } else if (featureName === 'game') {
    box.innerHTML = `
      <h3 class="text-xl font-bold mb-2">Guess the Animal</h3>
      <p class="mb-4">Click to start the game!</p>
      <button type="submit" id="play-game" class="mt-2 p-2 bg-blue-600 text-white rounded  hover:bg-blue-700 transition">Play Game</button>
    `;

    const playGameBtn = document.getElementById("play-game");

    playGameBtn.addEventListener("click", async () => {
      await startGame();
    });
  } else {
    box.innerHTML = `<p class="text-red-500">Feature not found.</p>`;
  }
};





// const app = document.getElementById('app');

// async function loadComponent(path: string): Promise<string> {
//   const res = await fetch(path);
//   return await res.text();
// }

// async function loadView(viewName: string) {
//   const layout = await loadComponent('/components/layout.html');
//   const header = await loadComponent('/components/header.html');
//   const footer = await loadComponent('/components/footer.html');
//   const view = await loadComponent(`/views/${viewName}.html`);
  
//   // Render layout first
//   document.body.innerHTML = layout;

//   // Inject components into layout slots
//   (document.getElementById('header-slot') as HTMLElement).innerHTML = header;
//   (document.getElementById('footer-slot') as HTMLElement).innerHTML = footer;
//   (document.getElementById('page-content') as HTMLElement).innerHTML = view;
// }

// (window as any).loadFeature = (featureName: string) => {
//   const box = document.getElementById('feature-box');
//   if (!box) return;

//   if (featureName === 'search') {
//     box.innerHTML = `
//       <h3 class="text-xl font-bold mb-2">Search for Animals</h3>
//       <input type="text" id="search-input" placeholder="Type an animal name..." class="p-2 w-4/5 rounded border border-blue-500">
//       <input type="submit" id="search-all" value="Search all animals" class="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer">
//        <div id="search-results" class="mt-4"></div>
//       `;

//       requestAnimationFrame(() => {
//         const searchBtn = document.getElementById("search-all");
//         const input = document.getElementById("search-input") as HTMLInputElement;
//         const results = document.getElementById("search-results");
    
//         if (!searchBtn || !input || !results) return;
    
//         searchBtn.addEventListener("click", async () => {
//           try {
//             const animals = await getAllAnimals();
//             const query = input.value.toLowerCase();
    
//             const filtered = animals.filter((a: any) =>
//               a.name.toLowerCase().includes(query)
//             );
    
//             results.innerHTML = `
//               <h4 class="font-semibold">Search Results:</h4>
//               <ul class="list-disc ml-4">
//                 ${filtered.map((a: any) => `<li>${a.name} - ${a.habitat}</li>`).join("")}
//               </ul>
//             `;
//           } catch (err: any) {
//             alert("Error fetching animals: " + err.message);
//           }
//         });
//       });
//   } else if (featureName === 'game') {
//     box.innerHTML = `
//       <h3 class="text-xl font-bold mb-2">Guess the Animal</h3>
//       <p class="mb-4">Click to start the game!</p>
//       <button type="submit" id="play-game" class="mt-2 p-2 bg-blue-600 text-white rounded  hover:bg-blue-700 transition">Play Game</button>
//     `;
//     // <button onclick="alert('Game coming soon!')" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Start</button>

//     const playGameBtn = document.getElementById("play-game");

//     playGameBtn.addEventListener ("click", async() => {
//       try {
//         const game = await guessFunFact();
//         alert(game.funFact);
//       } catch (error) {
//         console.error("Error starting game:", error);
//         alert("An error occurred while starting the game.");
//       }
//     });
//   } else if (featureName === 'favourite') {
//     box.innerHTML = `
//       <h3 class="text-xl font-bold mb-2">Your Favourite Animals</h3>
//       <p>Click on any animal to learn more!</p>
//     `;
//   } else {
//     box.innerHTML = `<p class="text-red-500">Feature not found.</p>`;
//   }
// };

// (window as any).loadView = loadView;

// // Load the "home" view by default
// loadView('loginpage');

// // login form function with event listener
// document.addEventListener('submit', async (e) => {
//   const form = e.target as HTMLFormElement;

//   if (form.id === 'login-form') {
//     e.preventDefault();

//     const nameInput = document.getElementById('login-name') as HTMLInputElement;
//     const name = nameInput.value.trim();

//     if (!name) {
//       alert('Please enter your name!');
//       return;
//     }

//     try {
//       // const user = await loginUser(name);
//       // console.log('User logged in:', user);

//       loadView('home');
//     } catch (err: any) {
//       alert(err.message);
//     }
//   }
// });

// // create user form function with event listener
// document.addEventListener('submit', async (e) => {
//   const form = e.target as HTMLFormElement;

//   if (form.id === 'createUser-form') {
//     e.preventDefault();

//     const nameInput = document.getElementById('register-name') as HTMLInputElement;
//     const name = nameInput.value.trim();

//     if (!name) {
//       alert('Please enter your name!');
//       return;
//     }

//     try {
//       const user = await createUser(name);
//       console.log('User created successfully:', user);

//       loadView('home');
//     } catch (err: any) {
//       alert(err.message);
//     }
//   }
// });

// // logout user function with event listener
// document.addEventListener('submit', async (e) => {
//   const form = e.target as HTMLFormElement;

//   if (form.id === 'login-form') {
//     e.preventDefault();

//     const nameInput = document.getElementById('login-name') as HTMLInputElement;
//     const name = nameInput.value.trim();

//     if (!name) {
//       alert('Please enter your name!');
//       return;
//     }

//     try {
//       const user = await loginUser(name);
//       console.log('User logged in:', user);

//       loadView('home');
//     } catch (err: any) {
//       alert(err.message);
//     }
//   }
// });

// // Handle log out when user clicks on the log out link
// const logoutLink = document.querySelector('a[href="#"][onclick="loadView(\'loginpage\')"]');

// if (logoutLink) {
//   logoutLink.addEventListener('click', async (e) => {
//     e.preventDefault(); // Prevent the default action of the link

//     try {
//       await logoutUser(); // Call the logout function
//       console.log('User logged out successfully');
//       loadView('loginpage'); // Redirect user to login page after logout
//     } catch (err: any) {
//       alert('Failed to log out: ' + err.message);
//     }
//   });
// }

// event listener for search all animals into feature box