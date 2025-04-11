const API_BASE = 'https://restful-api-animals.onrender.com/api';

// export async function createUser(name: string) {
//   const response = await fetch(`${API_BASE}/users/create`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name }),
//     credentials: 'include'
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message || 'Failed to create user');
//   }

//   const data = await response.json();
//   return data;
// }
  
//   export async function loginUser(name: string) {
//     const response = await fetch(`${API_BASE}/users/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name }),
//       credentials: 'include'
//     });
  
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.message || 'Failed to login');
//     }
  
//     const data = await response.json();
//     return data;
//   }
  
//   export async function logoutUser() {
//     const response = await fetch(`${API_BASE}/users/logout`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include'
//     });
  
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.message || 'Failed to logout');
//     }
//     return await response.json();
//   }