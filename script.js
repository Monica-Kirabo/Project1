
const movieSearchUrl = "https://api.themoviedb.org/3/search/movie"
const nowPlayingUrl = "https://api.themoviedb.org/3/search/movie/now_playing";
const movieImageUrl = "https://api.themoviedb.org/3/movie";
const apiKey='26a6ca6a064e61eeb4b31ebf6a5a3c01';
const movieArea= document.getElementById('movieArea');
var currentSearchTerm='';
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
/*
window.onload=function(){
const moviedisplay=document.querySelector('movieArea');
    moviedisplay.addEventListener(`show`, ()=>{
        const dis=moviedisplay.value;
        
        nowplaying(dis);
    });
} 
*/
function nowplaying(nowPlayingUrl){
var result=fetch(nowPlayingUrl + "?api_key=" + apikey).then(response => response.json())
  .then(data => console.log(data));
  console.log(result);
}
async function getdata(searchTerm){
 
    
//const offset = currentApiPage * pageSize;
const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key= ${apiKey}&q=${searchTerm}`).then(response => response.json())
  .then(data => console.log(data));
  return response;

}

function generateHTML(movies){
movies.foreach(data=>{
    const  movieTitle=document.createElement('p');
    movieTitle.innerHTML=`${data.original_title}`;
    movieTitle.append(movieTitle);
});
movieArea.innerHTML=output;
}
async function handleFormSubmit(event) {
    event.preventDefault();
   // movieArea.innerHTML = '';
    currentSearchTerm = searchInput.value;
    const results = await getdata(currentSearchTerm);
    generateHTML(results);
    searchInput.value = '';
    currentApiPage++;
    showMeMoreBtn.classList.remove('hidden');
}

searchForm.addEventListener('submit', handleFormSubmit);
/*
function formSubmit(ev){
    var formel=document.querySelector("form");
    formel.addEventListener("submit",(ev)=>{
        console.log(ev.target.searchTerm.value);
        getdata(ev.target.searchTerm.value);
    });
}
const movieArea=document.querySelector('movieArea');
movieArea.addEventListener(`submit`,formSubmit(onclick))
/*
function generateMore(movie){
    return '<img src="${movie.img}">
            <span>${movie.name}</span>
            <span>${movie.rating}</span> 
            ' 

}*/


