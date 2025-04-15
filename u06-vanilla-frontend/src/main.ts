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