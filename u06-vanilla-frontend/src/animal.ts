const API_BASE = 'https://restful-api-animals.onrender.com/api';

type Animal = {
  id: string;
  name: string;
  habitat: string;
  location: string;
};

export async function searchAnimals(query: string): Promise<Animal[]> {
  try {
    const animals = await getAllAnimals();
    return animals.filter((a: Animal) =>
      a.name.toLowerCase().includes(query.toLowerCase())
    );
  } catch (err: any) {
    console.error("Error fetching animals:", err.message);
    throw err;
  }
}

// search animals by location
export async function searchAnimalsByLocation(location: string): Promise<Animal[]> {
  try {
    const animals = await getAllAnimals();
    return animals.filter((a: Animal) =>
      a.location.toLowerCase().includes(location.toLowerCase())
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

  // find animal by name
  export async function findAnimalByName(name: string): Promise<Animal | undefined> {
    const animals = await getAllAnimals();
    return animals.find(a => a.name.toLowerCase() === name.toLowerCase());
  }
 
  // Get animal by ID
export async function getAnimalById(id: string) {
    const res = await fetch(`${API_BASE}/animals/get/${id}`, {
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

// show all animal details


   // update animal by ID
export async function updateAnimalById(id: string, data: Partial<Animal>) {
    const res = await fetch(`${API_BASE}/animals/update/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json' },
      // credentials: 'include'
      body: JSON.stringify(data)
    });
    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to update animal');
    }
    return await res.json();
  } 

     // delete animal by ID
export async function deleteAnimalById(id: string) {
    const res = await fetch(`${API_BASE}/animals/delete/${id}`, {
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