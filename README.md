# 🐾 Animal Explorer API & Frontend

An interactive learning project for toddlers that allows users to explore animals by location, learn fun facts, and manage animal data through a friendly frontend and a RESTful backend built with Node.js, Express, MongoDB, and TypeScript.

## 📚 Features

### 🔍 Search & Explore

- **Search by Animal Name** <br>
Find animals by typing their name or by searching for all and view their details.

- **Filter by Location** <br>
Select a location from a dropdown to view animals found there.

- **View Details** <br>
Click an animal to see its full details, including:<br>
    - Name

    - Location

    - Fun Fact

### ✏️ Update & Manage

- **Update Animal Details** <br>
Edit the name, location, or fun fact of an animal in the frontend UI.

- **Delete Animals** <br>
Remove animals from the database with a single click.

- **Add New Animal** <br>
API support for adding new animal.

## 🛠️ Technologies

- **Frontend:**

    - Vite + TypeScript

    - Vanilla DOM manipulation

    - Tailwind CSS for styling

- **Backend:**

    - Node.js

    - Express

    - MongoDB (Mongoose)

    - TypeScript

- **Deployment:**

    - Render (Backend API)

    - Netlify (Frontend server)

## 📂 Project Structure

| Route                 | Folder | Folder     |  File                | Function                           |
| ----------------------|--------|------------|----------------------|------------------------------------|
| u06-vanilla-frontend  |        |            | index.html           | Main entry point for server        |
| u06-vanilla-frontend  | public |            |                      |                                    |
|                       |        | components | footer.html          |                                    |
|                       |        | components | header.html          |                                    |
|                       |        | components | layout.html          |                                    |
|                       |        | images     | map_of_the_world.svg |                                    |
|                       | src    |            |                      |                                    |
|                       |        |            | main.ts              | App and layout initialization      |
|                       |        |            | featureBox.ts        | Function & styling for display box |
|                       |        |            | eventListeners.ts    | All event listeners                |
|                       |        |            | animal.ts            | API calls and CRUD                 |
|                       |        |            | style.css            | Tailwind CSS config                |
|                       |        |            | viewLoader.ts        |                                    |

## 📡 API Endpoints

| Method  | Endpoint                        | Description             |
|---------|---------------------------------|-------------------------|
| GET     | /api/animals/getall             | Get all animals         |
| GET     | /api/animals/get/:id            | Get animal by ID        |
| GET     | /api/animals/search/:name       | Search animals by name  |
| GET     | /api/animals/location/:location | Get animals by location |
| POST    | /api/animals/add                | Add a new animal        |
| PUT     | /api/animals/update/:id         | Update animal by ID     |
| DELETE  | /api/animals/delete/:id         | Delete animal by ID     |

## 🚀 Running the Project

### 🔧 Install Dependencies

To download my project yourself I've included the dependencies needed.

- Run *npm install* to generate the *node_modules* based on the *package.json* file.

<details> <summary>Click to view 📜 package.json</summary>
{

  "name": "u06-vanilla-frontend",

  "private": true,

  "version": "0.0.0",
  "type": "module",
  
  "scripts": {

    "dev": "vite",

    "build": "tsc && vite build",

    "preview": "vite preview"

  },

  "devDependencies": {

    "@tailwindcss/postcss": "^4.1.4",

    "@types/node": "^22.14.1",

    "autoprefixer": "^10.4.21",

    "postcss": "^8.5.3",

    "tailwindcss": "^4.1.3",

    "typescript": "~5.7.2",

    "vite": "^6.2.0"

  },

  "dependencies": {

    "@tailwindcss/vite": "^4.1.3"

  }

}
</details>

### 🖥️ Start Frontend

npm run dev

## 🌍 Deployed API

Alternatively you can go straight to the site!

👉 `https://amazinganimals.netlify.app`

## 📖 Future Improvements

- Add images for each animal

- Interactive map view on the frontend

- Guess-the-animal fun fact game

- Authentication for managing data

- Mobile-friendly UI adjustments

## 👩‍💻 Author

Made with ❤️ by Sue Holding