import request from 'superagent';
import store from './store';

export default {
  addSong,
  play
};

function addSong(name) {
  store.playlist.push({ name });

  resolveVideo(name);

  store.updated();
}

function playNext() {
  const nextIndex = Math.floor(Math.random() * store.playlist.length);

  store.nowPlaying = nextIndex;

  store.updated();
}

function resolveVideo(name) {
  const song = store.playlist.find((item) => item.name === name);
  const url = `https://talkserver.herokuapp.com/youtube/${ name }`;

  console.log(`Resolve ${name}`);

  request('GET', url).end((err, data) => {
    song.data = JSON.parse(data.text);
    store.updated();
  });
}

function play() {
  setInterval(playNext, 1000);
}

store.playlist.forEach((song) => resolveVideo(song.name));
