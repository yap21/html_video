// Import stylesheets
import './style.css';

// Write Javascript code!
const video = document.getElementById('video');
video.src = "https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4";
video.type = "video/mp4";
video.autoplay = true;
video.loop = false;