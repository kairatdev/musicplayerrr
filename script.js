let container = document.createElement("div");
container.className = "container";

let main = document.createElement('div');
main.className = "music-player";

let nav = document.createElement('nav');

let circle = document.createElement("div");
circle.className = "circle";
circle.innerHTML = `<i class="fa-solid fa-angle-left"></i>`;

let circle2 = document.createElement("div");
circle2.className = "circle2";
circle2.innerHTML = `<i class="fa-solid fa-bars"></i>`;

let songimg = document.createElement("img");
songimg.className = "imgsize";
songimg.src = `img6.png`;

let text = document.createElement("h1");
text.innerHTML = "Самая";
text.className = "text1";

let ptext = document.createElement("p");
ptext.innerHTML = "Miyagi & Andy Panda";
ptext.className = "text2";

let audio = document.createElement("audio");

audio.id = 'song';

let source = document.createElement("source");
source.type = 'audio/mpeg';
source.src = `audio.mp3`;

let input = document.createElement("input");
input.type = "range";
input.value = "0";
input.id = "progress";

let controls = document.createElement("div");
controls.className = "controls";

let i = document.createElement("div");
i.innerHTML = `<i class="fa-solid fa-backward"></i>`;
let i2 = document.createElement("div");
i2.onclick = PlayPause;
i2.innerHTML = `<i class="fa-solid fa-play" id="ctrlIcon"></i>`;
let i3 = document.createElement('div');
i3.innerHTML = `<i class="fa-solid fa-forward"></i>`;

nav.append(circle);
nav.append(circle2);

main.append(nav);
main.append(songimg);
main.append(text);
main.append(ptext);
audio.append(source);
main.append(audio);
main.append(input);
main.append(controls);
controls.append(i);
controls.append(i2);
controls.append(i3);

container.append(main);
document.body.append(container);

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function PlayPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}