export function renderSearchTemplate(): string {
    return `
      <h3 class="text-xl font-bold mb-2">Search for Animals</h3>
  
      <input type="text" id="search-input" placeholder="Type an animal name..." class="p-2 w-4/5 rounded border border-blue-500">
      <input type="submit" id="search-all" value="Search for animal" class="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer">
      
      <input type="submit" id="get-all" value="Get all animals" class="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer">

      <input type="submit" id="add-new" value="Add a new animal" class="mt-2 p-2 bg-blue-500 text-white rounded cursor-pointer">

      <h4 class="font-semibold mt-4">Or choose a location:</h4>
      <select id="location-select" class="p-2 w-4/5 rounded border border-blue-500 mt-2">
        <option value="">-- Select Location --</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Arctic">Arctic</option>
        <option value="Ocean">Ocean</option>
      </select>
      <input type="submit" id="search-location" value="Search by Location" class="mt-2 p-2 bg-green-500 text-white rounded cursor-pointer">
  
      <div id="search-results" class="mt-4"></div>
    `;
  }
  