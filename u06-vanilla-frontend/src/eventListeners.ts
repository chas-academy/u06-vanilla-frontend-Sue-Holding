import { addAnimal, getAllAnimals, searchAnimals, searchAnimalsByLocation, updateAnimalById, deleteAnimalById } from './animal';
import { Animal } from './animal';

// add animal
export function setupAddAnimalFeature() {
    const addBtn = document.getElementById('add-animal-btn');
    if (!addBtn) return;
  
    addBtn.addEventListener('click', async () => {
      const nameInput = (document.getElementById('add-name') as HTMLInputElement).value.trim();
      const locationInput = (document.getElementById('add-location') as HTMLInputElement).value.trim();
      const funFactInput = (document.getElementById('add-funFact') as HTMLInputElement).value.trim();
  
      if (!nameInput || !locationInput || !funFactInput) {
        alert('Please fill in all fields!');
        return;
      }
  
      try {
        const newAnimal = {
          name: nameInput,
          location: locationInput,
          funFact: funFactInput
        };
  
        const createdAnimal = await addAnimal(newAnimal);
        alert(`Animal ${createdAnimal.name} added successfully!`);
  
        // Optionally clear form inputs
        (document.getElementById('add-name') as HTMLInputElement).value = '';
        (document.getElementById('add-location') as HTMLInputElement).value = '';
        (document.getElementById('add-funFact') as HTMLInputElement).value = '';
  
      } catch (err: any) {
        alert('Error adding animal: ' + err.message);
      }
    });
  }

export function setupSearchFeature() {
    const searchBtn = document.getElementById('search-all');
    const getAllBtn = document.getElementById('get-all');
    const searchLocBtn = document.getElementById('search-location');
    const locationSelect = document.getElementById('location-select') as HTMLSelectElement;
    const input = document.getElementById('search-input') as HTMLInputElement;
    const results = document.getElementById('search-results');
  
    if (!searchBtn || ! getAllBtn || !input || !locationSelect || !searchLocBtn || !results) return;
  
    searchBtn.addEventListener('click', async () => {
      try {
        const filtered = await searchAnimals(input.value);
        renderSearchResults(filtered, results);
    } catch (err: any) {
        alert('Error fetching animals: ' + err.message);
      }
    });
  
    getAllBtn.addEventListener('click', async () => {
        try {
          const filtered = await getAllAnimals();
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
      resultsContainer.innerHTML = 
      '<p class="text-gray-500">No animals found.</p>';
      return;
    }
  
    resultsContainer.innerHTML = `
      <h4 class="font-semibold">Search Results:</h4>
      <ul class="list-disc ml-4">
        ${animals.map(a => 
            `<li 
            class="cursor-pointer text-blue-800 hover:underline" 
            data-id="${a._id}"
            data-name="${a.name}"
            data-location="${a.location}"
            data-funfact="${a.funFact}"
            >
            ${a.name} - ${a.location}
            </li>`).join('')}
      </ul>
    `;
    attachAnimalListeners(resultsContainer);
  }
  
  function attachAnimalListeners(resultsContainer: HTMLElement) {
    const animalItems = resultsContainer.querySelectorAll('li');
    animalItems.forEach(item => {
        item.addEventListener('click', async () => {
            const animal: Animal = {
                _id: item.getAttribute('data-id')!,
                name: item.getAttribute('data-name')!,
                location: item.getAttribute('data-location')!,
                funFact: item.getAttribute('data-funfact')!
              };
              console.log('Clicked animal:', animal); //debug
              showAnimalDetails(animal, resultsContainer);
            });
          });
        }
   
  
  function showAnimalDetails(animal: Animal, resultsContainer: HTMLElement) {
    resultsContainer.innerHTML = `
      <h4 class="font-semibold">Details for ${animal.name}:</h4>

      <div class="flex items-center mb-2">
        <strong class="w-32">Name:</strong>
        <input type="text" id="update-name" value="${animal.name}" class="p-2 border rounded w-64 mr-2" />
        <button id="update-name-btn" class="p-2 bg-purple-500 text-white rounded cursor-pointer">Update</button>
      </div>

      <div class="flex items-center mb-2">
        <strong class="w-32">Location:</strong>
        <input type="text" id="update-location" value="${animal.location}" class="p-2 border rounded w-64 mr-2" />
        <button id="update-location-btn" class="p-2 bg-purple-500 text-white rounded cursor-pointer">Update</button>
      </div>

      <div class="flex items-center mb-2">
        <strong class="w-32">Fun Fact:</strong>
        <input type="text" id="update-funFact" value="${animal.funFact}" class="p-2 border rounded w-64 mr-2" />
        <button id="update-funFact-btn" class="p-2 bg-purple-500 text-white rounded cursor-pointer">Update</button>
      </div>

      <div class="mt-4">
        <button id="delete-animal" class="p-2 bg-red-500 text-white rounded cursor-pointer">Delete Animal</button>
      </div>

      <div id="add-animal-form" class="mb-4">
    <h4 class="font-semibold">Add New Animal</h4>
    <input type="text" id="add-name" placeholder="Name" class="p-2 border rounded mr-2" />
    <input type="text" id="add-location" placeholder="Location" class="p-2 border rounded mr-2" />
    <input type="text" id="add-funFact" placeholder="Fun Fact" class="p-2 border rounded mr-2" />
    <button id="add-animal-btn" class="p-2 bg-green-500 text-white rounded cursor-pointer">Add Animal</button>
  </div>
    `;

    // create new animal action

    

    document.getElementById('add-animal-btn')?.addEventListener('click', async () => {
        const nameInput = (document.getElementById('add-name') as HTMLInputElement).value.trim();
        const locationInput = (document.getElementById('add-location') as HTMLInputElement).value.trim();
        const funFactInput = (document.getElementById('add-funFact') as HTMLInputElement).value.trim();
        
        if (!nameInput || !locationInput || !funFactInput) {
            alert('Please fill in all fields!');
            return;
        }

        try {
            const newAnimal = {
                name: nameInput,
                location: locationInput,
                funFact: funFactInput
              };

        const createdAnimal = await addAnimal(newAnimal);
        alert (`Animal "${createdAnimal.name}" added successfully!`);
        
        (document.getElementById('add-name') as HTMLInputElement).value = '';
        (document.getElementById('add-location') as HTMLInputElement).value = '';
        (document.getElementById('add-funFact') as HTMLInputElement).value = '';
    
        } catch (err: any) {
        alert('Error adding animal: ' + err.message);
        }
      });

  // update animal name action
    document.getElementById('update-name-btn')?.addEventListener('click', async () => {
      const newName = (document.getElementById('update-name') as HTMLInputElement).value;
      console.log('Updating Name:', newName);
      if (newName !== animal.name) {
        await updateAnimalById(animal._id, { name: newName });
        alert('Animal name updated!');
      }
    });

    // update animal location action
    document.getElementById('update-location-btn')?.addEventListener('click', async () => {
        const newLocation = (document.getElementById('update-location') as HTMLInputElement).value;
        console.log('Updating Location:', newLocation);
        if (newLocation !== animal.location) {
            await updateAnimalById(animal._id, { location: newLocation });
            alert('Animal location updated!');
        }
      });
  
      // update animal fun fact action
    document.getElementById('update-funFact-btn')?.addEventListener('click', async () => {
        const newFunFact = (document.getElementById('update-funFact') as HTMLInputElement).value;
        console.log('Updating Fun Fact:', newFunFact);
        if (newFunFact != animal.funFact) {
            await updateAnimalById(animal._id, { funFact: newFunFact });
            alert('Animal fun fact updated!');
        }
      });

      // delete animal action
    document.getElementById('delete-animal')?.addEventListener('click', async () => {
      await deleteAnimalById(animal._id);
      alert('Animal deleted!');
      resultsContainer.innerHTML = ''; // Clear after delete
    });
  }





  // animalItems.forEach(item => {
    //     item.addEventListener('click', async () => {
    //       const animalName = item.getAttribute('data-name');
    //       const animalId = item.getAttribute('data-id');
    //       if (!animalName || !animalId) return;
          
    //       const animal = await findAnimalByName(animalName);
    //       if (animal) {
    //         // Make sure we overwrite the id with the correct one from the list item
    //         animal.id = animalId;
    //         showAnimalDetails(animal, resultsContainer);
    //       }
    //     });
    //   });
    // }