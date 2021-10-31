import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const TIME_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', 
{
    id: 236203659,
    width: 640
});

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));
function onPlayerTimeUpdate(event) {
    localStorage.setItem(
        TIME_KEY, `${event.seconds}`
    )};

const savedTime = localStorage.getItem(TIME_KEY) || 0;

player.setCurrentTime(savedTime);