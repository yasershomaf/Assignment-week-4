var searchResult = {"Search":[{"Title":"The Atheist Delusion","Year":"2016","imdbID":"tt5910814","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzA3OTNhNzAtNzIxNC00OGQ3LTk1ODktYzY1ODYxYzVhZTJhXkEyXkFqcGdeQXVyNTYxMzg0ODg@._V1_SX300.jpg"},{"Title":"Delusion","Year":"1991","imdbID":"tt0101704","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3MzgyODUwNl5BMl5BanBnXkFtZTcwNTMxNzMyMQ@@._V1_SX300.jpg"},{"Title":"Deception III: Dark Delusion","Year":"1999","imdbID":"tt0844756","Type":"game","Poster":"N/A"},{"Title":"Delusion","Year":"1981","imdbID":"tt0080607","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg3OTUzNjg3Ml5BMl5BanBnXkFtZTcwNzI1NTIyMQ@@._V1_SX300.jpg"},{"Title":"Dark Delusion","Year":"1947","imdbID":"tt0039301","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTNkZjVmNzYtZjBkOC00ZjczLTgxOTgtZDFlZTU4NDFhMjgwXkEyXkFqcGdeQXVyMDMxMjQwMw@@._V1_SX300.jpg"},{"Title":"Delusion","Year":"2016","imdbID":"tt4113846","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MzczNzI5Ml5BMl5BanBnXkFtZTgwNTE0MDIyNTE@._V1_SX300.jpg"},{"Title":"The God Delusion Debate","Year":"2007","imdbID":"tt2562644","Type":"movie","Poster":"N/A"},{"Title":"Lionfish Delusion","Year":"2012","imdbID":"tt2404221","Type":"movie","Poster":"N/A"},{"Title":"Delusion","Year":"1998","imdbID":"tt0166406","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMmE5NWU4ZDEtNDhjMC00ZDYyLThiNDMtZGUyYWEwMDk1YTQxXkEyXkFqcGdeQXVyMTYzNTE3NDA@._V1_SX300.jpg"},{"Title":"Self-Delusion and Other Obstacles","Year":"2013","imdbID":"tt2724514","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTUwNTgzNjE1OF5BMl5BanBnXkFtZTcwNDQzODc0OQ@@._V1_SX300.jpg"}],"totalResults":"64","Response":"True"};
console.log(searchResult.Search[2].Title);
document.body.style.backgroundColor = "#0d4d4d";
var movieList = document.createElement("ul");
movieList.style.listStyleType = "none";
movieList.style.width = "90%";
movieList.style.margin = "auto";
movieList.style.padding = "0px";
document.body.appendChild(movieList);
var movieItem = {};
for (var i=0; i<searchResult.Search.length; i++) {
    movieItem[i] = new CreateMoviItem(i);
}
function CreateMoviItem(index) {
    newText = document.createTextNode(searchResult.Search[index].Title);
    this.title = document.createElement("h2");
    this.title.appendChild(newText);
    this.title.style.float = "left";
    this.title.style.width = "25%";
    this.title.style.margin = "40px";
    this.title.style.padding = "0px";
    this.title.style.color = "#ffffff"
    this.div = document.createElement("div");
    this.div.style.width = "50%";
    this.div.style.margin = "0px";
    this.div.style.padding = "40px";
    this.div.style.float = "right";
    this.link = document.createElement("a");
    this.link.style.width = "100%";
    this.link.style.margin = "20px";
    this.link.style.padding = "0px";
    this.link.setAttribute("href", "http://www.imdb.com/title/" + searchResult.Search[index].imdbID);
    this.link.setAttribute("target", "_blank");
    this.img = document.createElement("img");
    this.img.setAttribute("src", searchResult.Search[index].Poster);
    this.img.setAttribute("alt", "Poster of " + searchResult.Search[index].Title + " movie.");
    this.img.style.width = "100%";
    this.img.style.margin = "0px";
    this.img.style.padding = "0px";
    this.link.appendChild(this.img);
    this.div.appendChild(this.link);
    newText = document.createTextNode("Type: " + searchResult.Search[index].Type + ", Year: " + searchResult.Search[index].Year + ".");
    this.p = document.createElement("p");
    this.p.appendChild(newText);
    this.p.style.width = "100%";
    this.p.style.margin = "20px";
    this.p.style.padding = "0px";
    this.p.style.color = "#ffffff"
    this.div.appendChild(this.p);
    this.mItem = document.createElement("li");
    this.mItem.style.width = "100%";
    this.mItem.style.margin = "20px 20px 20px 0px";
    this.mItem.style.padding = "0px";
    this.mItem.style.borderRadius = "25px";
    this.mItem.style.backgroundColor = "#003333";
    this.mItem.style.overflow = "auto";
    this.mItem.appendChild(this.title);
    this.mItem.appendChild(this.div);
    movieList.appendChild(this.mItem);
}