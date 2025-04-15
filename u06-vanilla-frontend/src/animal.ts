const API_BASE = 'https://restful-api-animals.onrender.com/api';

export type Animal = {
  _id: string;
  name: string;
  // habitat: string;
  location: string;
  funFact: string;
};

export async function getAllAnimals(): Promise<Animal[]> {
  const res = await fetch(`${API_BASE}/animals/getall`);
  if (!res.ok) {
    const errorBody = await res.text();
    console.error("response not ok:", res.status, errorBody);
    throw new Error('Failed to get animals');
  }

  const data = await res.json();
  // return data;
  return data.map((animal: any) => ({
    _id: animal._id,
    name: animal.name,
    location: animal.location,
    habitat: animal.habitat,
    funFact: animal.funFact
  }));
}

export async function searchAnimals(query: string): Promise<Animal[]> {
  const response = await fetch(`${API_BASE}/animals/search/${query}`);
  const data = await response.json();
  // return data;
  return data.map((animal: any) => ({
    _id: animal._id,
    name: animal.name,
    location: animal.location,
    habitat: animal.habitat,
    funFact: animal.funFact
  }));
}

export async function searchAnimalsByLocation(location: string): Promise<Animal[]> {
  const res = await fetch(`${API_BASE}/animals/location/${location}`);
  const data = await res.json();
  // return data;
  return data.map((animal: any) => ({
    _id: animal._id,
    name: animal.name,
    location: animal.location,
    habitat: animal.habitat,
    funFact: animal.funFact,
  }));
}

export async function updateAnimalById(id: string, data: Partial<Animal>) {
  const res = await fetch(`${API_BASE}/animals/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const errorBody = await res.text();
    console.error("response not ok:", res.status, errorBody);
    throw new Error('Failed to update animal');
  }
  return await res.json();
}

// add animal
export async function addAnimal(animal: Omit<Animal, "_id">) {
  const res = await fetch(`${API_BASE}/animals/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(animal)
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("response not ok:", res.status, errorBody);
    throw new Error('Failed to add animal');
  }

  return await res.json();
}

// delete animal
export async function deleteAnimalById(id: string) {
  const res = await fetch(`${API_BASE}/animals/delete/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    const errorBody = await res.text();
    console.error("response not ok:", res.status, errorBody);
    throw new Error('Failed to delete animal');
  }
  return await res.json();
}