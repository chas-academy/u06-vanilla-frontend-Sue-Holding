const API_BASE = 'https://restful-api-animals.onrender.com/api';

type Animal = {
  id: string;
  name: string;
  habitat: string;
  // add more properties if needed
};

export async function searchAnimals(query: string): Promise<Animal[]> {
  try {
    const animals = await getAllAnimals();
    return animals.filter((a: any) =>
      a.name.toLowerCase().includes(query.toLowerCase())
    );
  } catch (err: any) {
    console.error("Error fetching animals:", err.message);
    throw err;
  }
}

// Get all animal data
export async function getAllAnimals() {
    const res = await fetch(`${API_BASE}/animals/getall`, {
      method: 'GET',
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json', 
      // credentials: 'include'
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
      // credentials: 'include'
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
      // credentials: 'include'
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
      // credentials: 'include'
        },
    });
    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to delete animal');
    }
    return await res.json();
  } 