
const movieSearchUrl = "https://api.themoviedb.org/3/search/movie"
const nowPlayingUrl = "https://api.themoviedb.org/3/search/movie/now_playing";
const movieImageUrl = "https://api.themoviedb.org/3/movie";
const apiKey="26a6ca6a064e61eeb4b31ebf6a5a3c01";
//const apiUrl=" https://api.themoviedb.org/3/search/movie/now_playing"
const movieArea= document.getElementById('movieArea');
var currentSearchTerm='';
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const IMGPATH= "https://image.tmdb.org/t/p/w1280";
/*
window.onload=function(){
const moviedisplay=document.querySelector('movieArea');
    moviedisplay.addEventListener(`show`, ()=>{
        const dis=moviedisplay.value;
        
        nowplaying(dis);
    });
} 

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

nowplayingmovies(nowPlayingUrl);
async function nowplayingmovies(url){
    const resp=await fetch(url);
    const respData=await resp.json();
    console.log(respData);
    displaymovies(respData.results);
}

function displaymovies(movies){
   // movieArea.innerHTML=" ";
    movies.foreach((movie)=>{
        const{poster_path, title, vote_average, overview}=movie;

        const movieel=document.createElement("div");
        movieel.classList.add("movie");
        movieel.innerHTML=`<img src="${IMGPATH+poster_path}" alt="${title}" /> 
        <div class="movie-info">
        <h3>${title}</h3>
        <div class="overview">
        <h3>overview </h3>
        ${overview}
        </div>`;
        movieArea.appendChild(movieel);

    });
}
searchForm.addEventListener("submit",(e)=>{
e.preventDefault();
const searchTerm=searchInput.value;
if (searchTerm){
    nowplayingmovies(movieSearchUrl+searchTerm);
    searchInput.value=" ";
}
}
);
