import './style.css'
import { createUser, loginUser, logoutUser } from './user';
import { searchAnimals, startGame } from './animal';
import { loadView } from './viewLoader';

// Load the loginpage first
loadView('loginpage');

// Login user 
document.addEventListener('submit', async (e) => {
    const form = e.target as HTMLFormElement;

    e.preventDefault();

    const nameInput = document.getElementById('login-name') as HTMLInputElement;
    const name = nameInput.value.trim();

    if (!name) {
      alert('Please enter your name!');
      return;
    }

    try {
        if (form.id === 'login-form') {
          await loginUser(name);
          console.log('Welcome back:', name);
          loadView('home');
        } else if (form.id === 'createUser-form') {
          await createUser(name);
          console.log('User created:', name);
          loadView('home');
        }
      } catch (err: any) {
        alert(err.message);
      }
    });

// Handle logout
// export async function loadView(viewName: string) {
//     const view = await fetch(`views/${viewName}.html`);
//     const html = await view.text();

//     const app = document.getElementById('app');
//     if (!app) return;

//     app.innerHTML = html;
  
//     // Re-bind logout listener if home view is loaded
//     if (viewName === 'home') {
//       const logoutLink = document.querySelector('#logout-link');
//       if (logoutLink) {
//         logoutLink.addEventListener('click', async (e) => {
//           e.preventDefault();
//           try {
//             await logoutUser();
//             console.log('User logged out successfully');
//             loadView('loginpage');
//           } catch (err: any) {
//             alert('Failed to log out: ' + err.message);
//             console.error(err);
//           }
//         });
//       }
//     }
//   }


// document.addEventListener('DOMContentLoaded', () => {
// const logoutLink = document.querySelector('#logout-link');

// if (logoutLink) {
//   logoutLink.addEventListener('click', async (e) => {
//     e.preventDefault();
//     try {
//       await logoutUser();
//       console.log('User logged out successfully');
//       console.log('Logoutlink:', logoutLink);
//       loadView('loginpage');
//     } catch (err: any) {
//       alert('Failed to log out: ' + err.message);
//       console.error(err);
//     }
//   });
// }
// });

//switch case for nav choices - search - game - favorite
// Event listener for feature box interactions
(window as any).loadFeature = (featureName: string) => {
    const box = document.getElementById('feature-box');
    if (!box) return;
  
    switch (featureName) {
      case 'search':
        box.innerHTML = `
          <h3 class="text-xl font-bold mb-2">Search for Animals</h3>
          <input type="text" id="search-input" placeholder="Type an animal name..." class="p-2 w-4/5 rounded border border-blue-500">
          <input type="submit" id="search-all" value="Search all animals" class="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer">
          <div id="search-results" class="mt-4"></div>
        `;
  
        requestAnimationFrame(() => {
          const searchBtn = document.getElementById('search-all');
          const input = document.getElementById('search-input') as HTMLInputElement;
          const results = document.getElementById('search-results');
  
          if (!searchBtn || !input || !results) return;
  
          searchBtn.addEventListener('click', async () => {
            try {
              const filtered = await searchAnimals(input.value);
              results.innerHTML = `
                <h4 class="font-semibold">Search Results:</h4>
                <ul class="list-disc ml-4">
                  ${filtered.map((a: any) => `<li>${a.name} - ${a.habitat}</li>`).join('')}
                </ul>
              `;
            } catch (err: any) {
              alert('Error fetching animals: ' + err.message);
            }
          });
        });
        break;
  
      case 'game':
        box.innerHTML = `
          <h3 class="text-xl font-bold mb-2">Guess the Animal</h3>
          <p class="mb-4">Click to start the game!</p>
          <button type="submit" id="play-game" class="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Play Game</button>
        `;
  
        const playGameBtn = document.getElementById('play-game');
        playGameBtn?.addEventListener('click', async () => {
          await startGame();
        });
        break;
  
      case 'favourite':
        // Implement favourite logic
        break;
  
      default:
        box.innerHTML = '<p class="text-red-500">Feature not found.</p>';
        break;
    }
  };




// create user
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
//       console.log('User created:', user);
//       loadView('home');
//     } catch (err: any) {
//       alert(err.message);
//     }
//   }
// });

// Logout logic
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