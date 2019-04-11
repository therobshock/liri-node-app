require("dotenv").config();

var fs = require("fs")

var keys = require("./key.js");

var axios = require("axios");

var Spotify = require("node-spotify-api");

var moment = require("moment");

var spotify = new Spotify(keys.spotify);

userCom();

function userCom() {

    var userInp = process.argv[2];
    var userSearch = process.argv.slice(3).join(" ");
    
    if (userInp === "concert-this"){
        if (userSearch){
            concertThis(userSearch);
        } else {
            console.log("Name of band or artist needed");
        }
    }
    else if (userInp === "spotify-this-song"){
        if (userSearch){
            spotifyThisSong(userSearch);
            
        } else {
            spotifyThisSong("The Sign Ace of Base");
        }
    }
    else if (userInp === "movie-this"){
        if (userSearch){
            movieThis(userSearch);
        } else {
            movieThis("Mr. Nobody");
        }
    } 
    else if (userInp === "do-what-it-says"){
        doWhatItSays();
    } 
    else {
        console.log("not a valid argument");
    }
}

function concertThis(artist) {
    console.log("Searching for " + artist);

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(

        function(response) {

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var venue = results[i].venue;
                var eventDate = results[i].datetime;
                
                console.log("\n" + venue.name);
                console.log(venue.city + ", " + venue.country);
                console.log(eventDate);
            }
            console.log("\nEnd of list for " + artist);
        }
    );

}

function spotifyThisSong(song) {
    
    console.log("\nSpotifying song " + song);

    spotify.search(
        { 
            type: 'track', 
            query: song
        }, 
        
        function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
           
                var results = data.tracks.items[0];
                
                console.log("\n" + results.artists[0].name);
                console.log(results.name);
                console.log(results.preview_url);
                console.log(results.album.name);
        }
    );
}

function movieThis(title) {
    console.log("\nSearching for movie " + title);

    var queryURL = "http://www.omdbapi.com/?t="+ title + "&y=&plot=short&apikey=trilogy"

    axios.get(queryURL).then(
        function(response) {

        console.log("\n" + response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.Ratings[0].Source + " " + response.data.Ratings[0].Value);
        console.log(response.data.Ratings[1].Source + " " + response.data.Ratings[1].Value);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);

        }
    );

}

function doWhatItSays() {
    console.log("\nDoing what it says...");

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        var dataArr = data.split(",");
        
        userInp = dataArr[0];
        userSearch = dataArr[1];

        console.log("\n" + userInp + " " + userSearch);

        spotifyThisSong(userSearch);
      
      });
}