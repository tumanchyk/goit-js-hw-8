 import Player from '@vimeo/player';
 import throttle from 'lodash.throttle';

 const CURRENT_TIME_KEY = "videoplayer-current-time";


const playerEl = document.getElementById('vimeo-player');
const player = new Player(playerEl);

player.on('timeupdate', throttle(saveCurrentTime, 1000));


function saveCurrentTime(e){
    const currentTime = e.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, currentTime)
}
if(localStorage[CURRENT_TIME_KEY]){
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY))
}


