
// Global Constants
var movietitle;
var posterImage;
var votes; 
const apiKey = 'bB4KOXu3KgHGnoWGRnCBHsIJqZNNfGmw';
const pageSize = 9;

// Global Variables
var currentApiPage = 0;
var currentSearchTerm = '';

// Page Elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieAreaDiv = document.getElementById('movie-area');
const showMeMoreBtn = document.getElementById('show-me-more-btn');

/** Get results from API. */
async function getResults(searchTerm) {
    const offset = currentApiPage * pageSize;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&q=${searchTerm}`);
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

/** Render list of results. */
function displayResults(results) {
    const gifsHTMLString = results.map(gif => `
        <div class="gif">
            <img src="${gif.images.original.url}" />
        </div>
    `).join('');

    gifAreaDiv.innerHTML = gifAreaDiv.innerHTML + gifsHTMLString;
}

/** On form submit, get results and add to list. */
async function handleFormSubmit(event) {
    event.preventDefault();
    gifAreaDiv.innerHTML = '';
    currentSearchTerm = searchInput.value;
    const results = await getResults(currentSearchTerm);
    displayResults(results);
    searchInput.value = '';
    currentApiPage++;
    showMeMoreBtn.classList.remove('hidden');
}

searchForm.addEventListener('submit', handleFormSubmit);

async function handleShowMeMoreClick(event) {
    const results = await getResults(currentSearchTerm);
    displayResults(results);
    currentApiPage++;
}

showMeMoreBtn.addEventListener('click', handleShowMeMoreClick);