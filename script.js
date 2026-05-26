
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("slider-song");

const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs  = [
  {
  image: "./image3.jpg",
  name: "deck the halls",
  artist: "john parry",
  audio: "./deck-the-halls.mp3"
  },

  {
  image: "./image4.jpg",
  name: "jingle bells",
  artist: "james lord",
  audio: "./deck-the-halls.mp3"
  },

  {
  image: "./image5.jpg",
  name: "joy to the world",
  artist: "issac watts",
  audio: "./deck-the-halls.mp3"
  },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
 updateSong();

prevSongButton.addEventListener("click", function(){
  if (currentSongIndex == 0){
    return;
  }

  currentSongIndex --;
  updateSong();

});

nextSongButton.addEventListener("click", function(){
  if (currentSongIndex == songs.length - 1){
    return
  }
  currentSongIndex ++;
  updateSong();
});

playpauseButton.addEventListener("click", function(){
  audio.play();
  if (!audio.pause){
    audio.pause();
  }
  else{
    audio.play();
  }
});

function updateSong(){
  const song = songs[currentSongIndex];
  songImage.src = song.image;
  songName.innerText = song.name;
  songArtist.innerText = song.artist;

  audio.src = song.audio; 

  audio.onloadedmetadata = function(){

  

  songSlider.value = 0;
  songSlider.max = audio.duration;
  }
}

songSlider.addEventListener("change", function(){
  audio.currentTime = songSlider.value;
});

function moveSlider(){
  songSlider.value = audio.currentTime;

};

setInterval(moveSlider, 1000);

