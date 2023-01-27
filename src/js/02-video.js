import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iFrame = document.getElementById("vimeo-player")

const player = new Player(iFrame);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const onPlay = 
    player.on("timeupdate", function sec(sec) {
     player.getCurrentTime(sec).then(function (seconds) {
         console.log(seconds, "current seconds ");
        });
    });


iFrame.addEventListener("click", onPlay)


