
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("slider-song");

const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songe = [
  {
  image: "./album-art1.jpg",
  name: "deck the halls",
  artist: "john parry",
  audio: "./deck-the-halls.mp3"
  },

  {
  image: "./album-art1.jpg",
  name: "deck the halls",
  artist: "john parry",
  audio: "./deck-the-halls.mp3"
  },

  {
  image: "./album-art1.jpg",
  name: "deck the halls",
  artist: "john parry",
  audio: "./deck-the-halls.mp3"
  },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;

prevSongButton.addEventListener("click", function(){
  if (currentSongIndex == 0){
    return;
  }

  currentSongIndex --;

});

nextSongButton.addEventListener("click", function(){
  if (currentSongIndex == songs.length - 1){
    return
  }
  currentSongIndex ++;
});

function updateSong(){
  const song = songs[currentSongIndex];
  songImage.src = song.image;
  songName.innerText = song.name;
  songArtist.innerText = song.artist;
}

