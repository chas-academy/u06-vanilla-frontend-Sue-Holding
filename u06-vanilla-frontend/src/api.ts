const API_BASE = 'https://restful-api-animals.onrender.com/api';

// const featureBox = document.getElementById("feature-box");

// Get all animal data
export async function getAllAnimals() {
    const res = await fetch(`${API_BASE}/animals/getall`, {
      method: 'GET',
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json', 
      credentials: 'include'
        },
    });
    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to get animals');
    }
    return await res.json();
  }

  // Get animal by ID
export async function getAnimalById() {
    const res = await fetch(`${API_BASE}/animals/get/id`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json', 
      credentials: 'include'
        },
    });
    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to get animal');
    }
    return await res.json();
  }

   // update animal by ID
export async function updateAnimalById() {
    const res = await fetch(`${API_BASE}/animals/update/id`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json', 
      credentials: 'include'
        },
    });
    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to update animal');
    }
    return await res.json();
  } 

     // delete animal by ID
export async function deleteAnimalById() {
    const res = await fetch(`${API_BASE}/animals/delete/id`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json', 
      credentials: 'include'
        },
    });
    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to delete animal');
    }
    return await res.json();
  } 


// play game
export async function guessFunFact() {
    const res = await fetch(`${API_BASE}/animals/game/guess-funfact`, {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/json', 
        credentials: 'include'
            },
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to fetch game');
    }
    return await res.json();
}

// check games answer
export async function checkFunFact() {
    const res = await fetch(`${API_BASE}/animals/game/check-guess`, {
        method: 'POST',
          headers: { 
            'Content-Type': 'application/json', 
        credentials: 'include'
            },
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to check answer..');
    }
    return await res.json();
}