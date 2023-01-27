import Player from "@vimeo/player";

const iFrame = document.getElementById("vimeo-player")

const player = new Player(iFrame);
  
iFrame.addEventListener("click", onPlay)

function onPlay({target}) {
console.log(target);
    return target.currentTime.value;
};