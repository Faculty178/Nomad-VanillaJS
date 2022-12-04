const myAudio = document.getElementById("playlist");
const start = document.getElementById("music");
const btnBox = document.getElementById("btnBox");
const volumeBox = document.getElementById("volumeBox");

const album = [
    "Human.png",
    "braveshine.jpg",
    "nightmoves.png",
    "speedofsound.png",
    "whereverIgo.jpg",
    "wonderfulworld.jpg",
    "yellow.jpg"
]

const audios = [
    "Love Runs Out.mp3", 
    "Brave Shine.mp3",
    "Night Moves.mp3",
    "Speed Of Sound.mp3",
    "Wherever I Go.mp3",
    "Wonderful World.mp3",
    "Yellow.mp3"
]

console.log('is it working??');



let chosenNumber = Math.floor(Math.random()* album.length);

function paintAudio(){
    const img = document.createElement("img");
    img.src = `./img/${album[chosenNumber]}`;
    const music = document.createElement("audio");
    music.src = `./music/${audios[chosenNumber]}`;

    const playBtn = document.createElement("i");
    playBtn.setAttribute("class", "fa-solid fa-play fa-2x")

    const pauseBtn = document.createElement("i");
    pauseBtn.setAttribute("class", "fa-solid fa-pause fa-2x")

    const stopBtn = document.createElement("i");
    stopBtn.setAttribute("class", "fa-solid fa-stop fa-2x")

    const upBtn = document.createElement("i");
    upBtn.setAttribute("class", "fa-solid fa-volume-high fa-2x");

    const downBtn = document.createElement("i");
    downBtn.setAttribute("class", "fa-solid fa-volume-down fa-2x");

    start.style.display = 'none';
    btnBox.style.display = 'block';

    let volume = 0.7;

    myAudio.appendChild(img);
    myAudio.appendChild(music);

    btnBox.appendChild(playBtn);
    btnBox.appendChild(pauseBtn);
    btnBox.appendChild(stopBtn);

    volumeBox.appendChild(downBtn);
    volumeBox.appendChild(upBtn);
    

    function musicPlay(){
        music.play();
        music.loop = true;
        console.log(music);
        music.volume = volume;
    }
    playBtn.addEventListener("click", musicPlay);

    function musicPause(){
        music.pause();
    }
    pauseBtn.addEventListener("click", musicPause);

    function musicStop(){
        music.pause();
        music.currentTime = 0;
    }
    stopBtn.addEventListener("click", musicStop);

    function volumeDown(){
        volume -= 0.1;
        music.volume = volume;

        if(volume < 0){
            volume = 0;
        }
    }
    downBtn.addEventListener("click", volumeDown);

    function volumeUp(){
        volume += 0.1;
        music.volume = volume;

        if(volume > 1){
            volume = 1;
        }
    }
    upBtn.addEventListener("click", volumeUp);

}

start.addEventListener("click", paintAudio);