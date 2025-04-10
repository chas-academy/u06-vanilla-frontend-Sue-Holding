const API_BASE = 'https://restful-api-animals.onrender.com/api';

// const featureBox = document.getElementById("feature-box");

// Get all animal data
export async function getAllAnimals() {
    const res = await fetch(`${API_BASE}/animals/getall`, {
      method: 'GET',
    //   mode: 'cors',
      headers: { 
        'Content-Type': 'application/json', 
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
      method: 'DEL',
      headers: { 
        'Content-Type': 'application/json', 
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
    const res = await fetch(`${API_BASE}/animals/game/check.guess`, {
        method: 'POST',
          headers: { 
            'Content-Type': 'application/json', 
            },
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to check answer..');
    }
    return await res.json();
}


// create user function
export async function createUser(name: string) {
    const res = await fetch(`${API_BASE}/users/create`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    return await res.json();
  }

  // login user function
  export async function loginUser(name: string) {
    const res = await fetch(`${API_BASE}/users/login`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name })
    });
    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Login failed');
    }
    return await res.json();
  }

// logout user function
export async function logoutUser() {
    const res = await fetch(`${API_BASE}/users/logout`, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
    },
});

if (!res.ok) {
    const message = await res.text();
    throw new Error(message || 'Logout failed');
}
    return await res.json();
}