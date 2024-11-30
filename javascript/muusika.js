class MuusikaMangijaFN{
    constructor(albumId, songs) {
        this.albumElement = document.getElementById(albumId);
        this.heli = this.albumElement.querySelector('audio');
        this.lauluTiitel = this.albumElement.querySelector('.laulu-tiitel');
        this.prevBtn = this.albumElement.querySelector('.eel-nupp');
        this.mangPauseBtn = this.albumElement.querySelector('.paus-nupp');
        this.nextBtn = this.albumElement.querySelector('.jarg-nupp');
        this.edenemisRiba = this.albumElement.querySelector('.edenemis-riba');

        this.songs = songs;
        this.currentSongIndex = 0;
        this.isPlaying = false;

        this.initEventListeners();
        this.loadSong(this.currentSongIndex);
    }

    initEventListeners() {
        this.prevBtn.addEventListener('click', () => this.eelLaul());
        this.mangPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.nextBtn.addEventListener('click', () => this.jargLaul());
        this.edenemisRiba.addEventListener('input', () => this.setAudioProgress());
        this.heli.addEventListener('timeupdate', () => this.uuendaEdenemist());
        this.heli.addEventListener('ended', () => this.jargLaul());
    }

    loadSong(index) {
        const song = this.songs[index];
        this.heli.src = song.src;
        this.lauluTiitel.textContent = song.title;
        this.edenemisRiba.value = 0;
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pauseSong();
        } else {
            this.playSong();
        }
    }

    playSong() {
        this.isPlaying = true;
        this.mangPauseBtn.textContent = 'Pause';
        this.heli.play();
    }

    pauseSong() {
        this.isPlaying = false;
        this.mangPauseBtn.textContent = 'Play';
        this.heli.pause();
    }

    eelLaul() {
        this.currentSongIndex--;
        if (this.currentSongIndex < 0) {
            this.currentSongIndex = this.songs.length - 1;
        }
        this.loadSong(this.currentSongIndex);
        if (this.isPlaying) {
            this.playSong();
        }
    }

    jargLaul() {
        this.currentSongIndex++;
        if (this.currentSongIndex >= this.songs.length) {
            this.currentSongIndex = 0;
        }
        this.loadSong(this.currentSongIndex);
        if (this.isPlaying) {
            this.playSong();
        }
    }

    setAudioProgress() {
        const newTime = this.heli.duration * (this.edenemisRiba.value / 100);
        this.heli.currentTime = newTime;
    }

    uuendaEdenemist() {
        if (this.heli.duration) {
            const progressPercent = (this.heli.currentTime / this.heli.duration) * 100;
            this.edenemisRiba.value = progressPercent;
        }
    }
}

// Album laulud
const heartpartstrings = [
    { title: 'heart pa', src: '../muusika/suri - heart part strings - 01 heart pa.mp3' },
    { title: 'sister to sister', src: '../muusika/suri - heart part strings - 02 sister to sister.mp3' },
    { title: 'deaths', src: '../muusika/suri - heart part strings - 03 deaths.mp3' },
    { title: 'BLEED', src: '../muusika/suri - heart part strings - 04 BLEED.mp3' },
    { title: 'NULL', src: '../muusika/suri - heart part strings - 05 NULL.mp3' },
    { title: 'we are', src: '../muusika/suri - heart part strings - 06 we are.mp3' },
    { title: 'uni', src: '../muusika/suri - heart part strings - 07 uni.mp3' },
    { title: 'rt strings', src: '../muusika/suri - heart part strings - 08 rt strings.mp3' },
    { title: 'clarity', src: '../muusika/suri - heart part strings - 09 clarity.mp3' },
];

const heartPlayer = new MuusikaMangijaFN('heartpartstrings', heartpartstrings);

const pearlname = [
    { title: 'heavy rocks', src: '../muusika/suri - pearl name - 01 heavy rocks.mp3' },
    { title: 'blink', src: '../muusika/suri - pearl name - 02 blink.mp3' },
    { title: 'vanishing point', src: '../muusika/suri - pearl name - 03 vanishing point.mp3' },
];

const pearlPlayer= new MuusikaMangijaFN('pearlname', pearlname);

