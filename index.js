import './style.css';

var vConsole = new VConsole();
var type = "mp4";
var url = "https://www.w3schools.com/html/mov_bbb." + type;
var isSoundStatue = true;

const video = document.createElement('video');
video.poster = "https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png";
video.src = url;
video.type = "video/" + type;
video.autoplay = true;
video.preload = "auto";
video.volume = 0;
video.loop = true;
video.onclick = setVideoStatue;
document.body.appendChild(video);

const txt = document.createElement('p');
document.body.appendChild(txt);

function setVideoStatue(){
  isSoundStatue = !isSoundStatue;
  txt.innerText = 'Sound : ' + isSoundStatue;
  if(isSoundStatue){
    video.volume = 1;
  } else {
    video.volume = 0;
  }
  if(video.readyState) video.play();
}

setVideoStatue();