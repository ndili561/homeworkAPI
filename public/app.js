window.onload = function(){
  main();
}

function main(){
  var button = document.getElementById('add-button');
  var change = document.querySelector('#film-info')
  button.onclick = handleClick;
  var form = document.getElementById('film-form');
  form.onsubmit = handleSubmit;
}
  

var handleClick = function(event){
  
  if(document.getElementById('film-info').getElementsByTagName('li').length >= 1){
    var ul = document.getElementById('film-info')
     while(ul.hasChildNodes()){
      ul.removeChild(ul.lastChild);
     }
  }
  var text = document.getElementById('film-text-input');
  var film = "http://www.omdbapi.com/?t=" + text.value+"&tomatoes=true";
  search(film)
}

var handleSubmit = function(event){
  event.preventDefault();
  handleClick();
}

var search = function(film){
  var url = film;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      loadMovie(request.responseText,event)
    }
    request.send(null); 
  }

  var loadMovie = function(responseText)
  {
    var movie = JSON.parse(responseText);
    updateInfo(movie)
  }

  var updateInfo=function(movie){
    var ul = document.getElementById('film-info');
    var title = document.createElement('li')
    title.innerHTML = movie.Title
    var li = document.createElement('li')
    li.innerHTML = movie.Genre
    var act = document.createElement('li')
    act.innerHTML = movie.Actors
    var img = document.createElement('img')
    img.setAttribute('src', movie.Poster)
    img.setAttribute('id','image')
    var review = document.createElement('li')
    review.innerHTML = movie.tomatoConsensus
    ul.appendChild(img);
    ul.appendChild(title)
    ul.appendChild(li);
    ul.appendChild(act);
    ul.appendChild(review);
  }

 
  









