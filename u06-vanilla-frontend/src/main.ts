import './style.css'
// import { createUser, loginUser, logoutUser } from './user';
// import { searchAnimals, getAllAnimals, getAnimalById, updateAnimalById, deleteAnimalById, searchAnimalsByLocation   } from './animal';
import { startGame } from './game';
import { loadView } from './viewLoader';
import { renderSearchTemplate } from './featureBox';
import { setupSearchFeature } from './eventListeners';

// Load the loginpage first
loadView('home');

//switch case for nav choices - search - game - favorite
// Event listener for feature box interactions
(window as any).loadFeature = (featureName: string) => {
    const box = document.getElementById('feature-box');
    if (!box) return;
  
    switch (featureName) {
      case 'search':
        box.innerHTML =  renderSearchTemplate();
        setupSearchFeature();
        break;

    case 'game':
      box.innerHTML = `
        <h3 class="text-xl font-bold mb-2">Guess the Animal</h3>
        <p class="mb-4">Click to start the game!</p>
        <button type="submit" id="play-game" class="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">Play Game</button>
      `;
      const playGameBtn = document.getElementById('play-game');
      playGameBtn?.addEventListener('click', async () => {
        await startGame();
      });
      break;

    case 'favourite':
      box.innerHTML = '<p class="text-gray-500">Favourites coming soon!</p>';
      break;

    default:
      box.innerHTML = '<p class="text-red-500">Feature not found.</p>';
      break;
    }
  };
  
        // requestAnimationFrame(() => {
        //   const searchBtn = document.getElementById('search-all');
        //   const searchLocBtn = document.getElementById('search-location');
        //   const locationSelect = document.getElementById('location-select') as HTMLSelectElement;
        //   const input = document.getElementById('search-input') as HTMLInputElement;
        //   const results = document.getElementById('search-results');

        //   if (!searchBtn || !input || !locationSelect || !searchLocBtn || !results) return;
          
        //   searchBtn.addEventListener('click', async () => {
        //   try {
        //     const filtered = await searchAnimals(input.value);
        //     results.innerHTML = `
        //         <h4 class="font-semibold">Search Results:</h4>
        //         <ul class="list-disc ml-4">
        //         ${filtered.map(a => `<li class="cursor-pointer text-blue-500 hover:underline" data-name="${a.name}">${a.name} - ${a.location}</li>`).join('')}
        //         </ul>
        //     `;
        //     attachAnimalListeners();
        // } catch (err: any) {
        //      alert('Error fetching animals: ' + err.message);
        //        }
        //   });
        
        //   searchLocBtn.addEventListener('click', async () => {
        //     try {
        //         const selectedLocation = locationSelect.value;
        //         if (!selectedLocation) {
        //           alert('Please select a location.');
        //           return;
        //         }
        //         const filtered = await searchAnimalsByLocation(selectedLocation);
        //         results.innerHTML = `
        //           <h4 class="font-semibold">Animals in ${selectedLocation}:</h4>
        //           <ul class="list-disc ml-4">
        //             ${filtered.map((a: any) => 
        //                 `<li class="cursor-pointer text-blue-600 hover:underline" data-name="${a.name}">${a.name}</li>`
        //             ).join('')}
        //           </ul>
        //         `;
        //         attachAnimalListeners();
        //       } catch (err: any) {
        //         alert('Error fetching animals: ' + err.message);
        //       }
        //   });

        //   function attachAnimalListeners() {
        //     const animalItems = results.querySelectorAll('li');
        //     animalItems.forEach(item => {
        //       item.addEventListener('click', async () => {
        //         const animalName = item.getAttribute('data-name');
        //         const animal = await findAnimalByName(animalName!);
        //         if (animal) showAnimalDetails(animal);
        //       });
        //     });
        //   }

        //   function showAnimalDetails(animal: Animal) {
        //     results.innerHTML = `
        //       <h4 class="font-semibold">Details for ${animal.name}:</h4>
        //       <p><strong>Name:</strong> ${animal.name}</p>
        //       <p><strong>Location:</strong> ${animal.location}</p>
        //       <p><strong>Fun Fact:</strong> ${animal.funFact}</p>
          
        //       <input type="text" id="update-name" value="${animal.name}" class="p-2 border rounded mt-2">
        //       <button id="update-animal" class="p-2 bg-purple-500 text-white rounded ml-2">Update Name</button>
        //       <button id="delete-animal" class="p-2 bg-red-500 text-white rounded ml-2">Delete Animal</button>
        //     `;
          
        //     document.getElementById('update-animal')?.addEventListener('click', async () => {
        //       const newName = (document.getElementById('update-name') as HTMLInputElement).value;
        //       await updateAnimalById(animal.id, { name: newName });
        //       alert("Animal updated!");
        //     });
          
        //     document.getElementById('delete-animal')?.addEventListener('click', async () => {
        //       await deleteAnimalById(animal.id);
        //       alert("Animal deleted!");
        //       results.innerHTML = ''; // Clear view after deletion
        //     });
        //   }  
        // });
        // break;
        
//       case 'game':
//         box.innerHTML = `
//           <h3 class="text-xl font-bold mb-2">Guess the Animal</h3>
//           <p class="mb-4">Click to start the game!</p>
//           <button type="submit" id="play-game" class="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Play Game</button>
//         `;
  
//         const playGameBtn = document.getElementById('play-game');
//         playGameBtn?.addEventListener('click', async () => {
//           await startGame();
//         });
//         break;
  
//       case 'favourite':
//         // Implement favourite logic
//         break;
  
//       default:
//         box.innerHTML = '<p class="text-red-500">Feature not found.</p>';
//         break;
//     }
//   };

// Login user 
// document.addEventListener('submit', async (e) => {
//     const form = e.target as HTMLFormElement;

//     e.preventDefault();

//     const nameInput = document.getElementById('login-name') as HTMLInputElement;
//     const name = nameInput.value.trim();

//     if (!name) {
//       alert('Please enter your name!');
//       return;
//     }

//     try {
//         if (form.id === 'login-form') {
//           await loginUser(name);
//           console.log('Welcome back:', name);
//           loadView('home');
//         } else if (form.id === 'createUser-form') {
//           await createUser(name);
//           console.log('User created:', name);
//           loadView('home');
//         }
//       } catch (err: any) {
//         alert(err.message);
//       }
//     });

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