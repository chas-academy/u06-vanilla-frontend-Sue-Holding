const API_BASE = 'https://restful-api-animals.onrender.com/api';

// const featureBox = document.getElementById("feature-box");

// play game
export async function guessFunFact() {
    const res = await fetch(`${API_BASE}/animals/game/guess-funfact`, {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/json', 
        // credentials: 'include'
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
        // credentials: 'include'
            },
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error("response not ok:", res.status, errorBody);
        throw new Error('Failed to check answer..');
    }
    return await res.json();
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
