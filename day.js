song = "";

function preload() {
 song = loadSound("tara_sound.mp3");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}


