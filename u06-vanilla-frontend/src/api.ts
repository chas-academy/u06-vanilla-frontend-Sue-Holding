const API_BASE = 'https://restful-api-animals.onrender.com/api';

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