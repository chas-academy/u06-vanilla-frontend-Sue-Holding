import { getAllAnimals, guessFunFact } from './api.ts';

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

export async function startGame() {
  try {
    const game = await guessFunFact();
    alert(game.funFact);
  } catch (error) {
    console.error("Error starting game:", error);
    alert("An error occurred while starting the game.");
  }
}
