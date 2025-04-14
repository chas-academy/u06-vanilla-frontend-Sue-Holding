import { searchAnimals, searchAnimalsByLocation, findAnimalByName, updateAnimalById, deleteAnimalById } from './animal';
// import { Animal } from './types';

export function setupSearchFeature() {
    const searchBtn = document.getElementById('search-all');
    const searchLocBtn = document.getElementById('search-location');
    const locationSelect = document.getElementById('location-select') as HTMLSelectElement;
    const input = document.getElementById('search-input') as HTMLInputElement;
    const results = document.getElementById('search-results');
  
    if (!searchBtn || !input || !locationSelect || !searchLocBtn || !results) return;
  
    searchBtn.addEventListener('click', async () => {
      try {
        const filtered = await searchAnimals(input.value);
        renderSearchResults(filtered, results);
      } catch (err: any) {
        alert('Error fetching animals: ' + err.message);
      }
    });
  
    searchLocBtn.addEventListener('click', async () => {
      try {
        const selectedLocation = locationSelect.value;
        if (!selectedLocation) {
          alert('Please select a location.');
          return;
        }
        const filtered = await searchAnimalsByLocation(selectedLocation);
        renderSearchResults(filtered, results);
      } catch (err: any) {
        alert('Error fetching animals: ' + err.message);
      }
    });
  }
  
  function renderSearchResults(animals: Animal[], resultsContainer: HTMLElement) {
    if (animals.length === 0) {
      resultsContainer.innerHTML = '<p class="text-gray-500">No animals found.</p>';
      return;
    }
  
    resultsContainer.innerHTML = `
      <h4 class="font-semibold">Search Results:</h4>
      <ul class="list-disc ml-4">
        ${animals.map(a => `<li class="cursor-pointer text-blue-800 hover:underline" data-name="${a.name}">${a.name} - ${a.location}</li>`).join('')}
      </ul>
    `;
    attachAnimalListeners(resultsContainer);
  }
  
  function attachAnimalListeners(resultsContainer: HTMLElement) {
    const animalItems = resultsContainer.querySelectorAll('li');
    animalItems.forEach(item => {
      item.addEventListener('click', async () => {
        const animalName = item.getAttribute('data-name');
        if (!animalName) return;
        const animal = await findAnimalByName(animalName);
        if (animal) showAnimalDetails(animal, resultsContainer);
      });
    });
  }
  
  function showAnimalDetails(animal: Animal, resultsContainer: HTMLElement) {
    resultsContainer.innerHTML = `
      <h4 class="font-semibold">Details for ${animal.name}:</h4>
      <p><strong>Name:</strong> ${animal.name}</p>
      <p><strong>Location:</strong> ${animal.location}</p>
      <p><strong>Fun Fact:</strong> ${animal.funFact}</p>
  
      <input type="text" id="update-name" value="${animal.name}" class="p-2 border rounded mt-2">
      <button id="update-animal" class="p-2 bg-purple-500 text-white rounded ml-2">Update Name</button>
      <button id="delete-animal" class="p-2 bg-red-500 text-white rounded ml-2">Delete Animal</button>
    `;
  
    document.getElementById('update-animal')?.addEventListener('click', async () => {
      const newName = (document.getElementById('update-name') as HTMLInputElement).value;
      await updateAnimalById(animal.id, { name: newName });
      alert('Animal updated!');
    });
  
    document.getElementById('delete-animal')?.addEventListener('click', async () => {
      await deleteAnimalById(animal.id);
      alert('Animal deleted!');
      resultsContainer.innerHTML = ''; // Clear after delete
    });
  }