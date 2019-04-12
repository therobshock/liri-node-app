# liri-node-app
Unit 10 Assignment

Demo video: https://youtu.be/N70y3fgjXlk

1. Required modules are established. VS suggested a fix to "import" rather than require. Here we're going with the methods described in class. 

2. On run, calls a function userCom() that checks for commands from argument index 2. 

    "concert-this" = if user inputs "node liri.js concert-this" it will first check if there are more command arguments.
    If true, function concertThis() is called and the additional command is passed through. If not, the terminal will log "Name of band or artist needed".

    "spotify-this-song" = if user inputs "node liri.js spotify-this-song" it will first check if there are more command arguments.
    If true, function spotifyThisSong() is called and the additional command is passed through. If not, "The Sign Ace of Base" is passed through the same.

    "movie-this" = if user inputs "node liri.js movie-this" it will first check if there are more command arguments.
    If true, function movieThis() is called and the additional command is passed through. If not, "Mr. Nobody" is passed through the same.

    "do-what-it-says = if user inputs "node liri.js do-what-it-says" function doWhatItSays() is called.

    Else, "not a valid argument" is logged to the terminal.

3. The commands call these functions: 

    concertThis() = takes in "artist" as a parameter. Logs to terminal "Searching for (artist)". Axios inserts parameter into "Bands In Town" api to search for events. Loops through event results and displays in the terminal venue name, city and country, and date formated by moment. Finally, "End of list for (artist)" is logged to the terminal.

    spotifyThisSong() = takes in "song" as a parameter. Logs to terminal "Spotifying song (song)". Spotify module used to query (song) in search. From the data results for artist name, song name, preview url, and album name are logged to the terminal. 

    movieThis() = takes in "title" as a parameter. Logs to the terminal "Searching for movie (title)". Axios inserts parameter into "OMDB" api to search for movie info.  Logs relevent info from response results to the terminal.

    doWhatItSays() = Logs to ther terminal "Doing what it says...". FS reads contents of file random.txt and stores them into an array. Function spotifyThisSong() is called and index 1 of array is passed through. 