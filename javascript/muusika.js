// Muusika Mängija konstruktor, this.element kõik html failist 
class MuusikaMangijaFN{
    constructor(albumId, laulud) {
        this.albumElement = document.getElementById(albumId);
        this.heli = this.albumElement.querySelector('audio');
        this.lauluTiitel = this.albumElement.querySelector('.laulu-tiitel');
        this.EelNupp = this.albumElement.querySelector('.eel-nupp');
        this.mangPauseBtn = this.albumElement.querySelector('.paus-nupp');
        this.JargNupp = this.albumElement.querySelector('.jarg-nupp');
        this.edenemisRiba = this.albumElement.querySelector('.edenemis-riba');

	//laulud on "järjend" lauludest, alustame esimesest, ja algselt ei mängi muusikat.
        this.laulud = laulud;
        this.PrgLaulIndeks = 0;
        this.isPlaying = false;

        this.initEventListeners();
        this.LaeLaul(this.PrgLaulIndeks);
    }

    initEventListeners() {
	//"Kuulame" klõppsamis sündmuste jaoks, kui kasutaja vajutab X html elementi peale, siis selle põhjal teeme klassi funktsiooni.
        this.EelNupp.addEventListener('click', () => this.eelLaul());
        this.mangPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.JargNupp.addEventListener('click', () => this.jargLaul());
        this.edenemisRiba.addEventListener('input', () => this.setRibaPos());
        this.heli.addEventListener('timeupdate', () => this.uuendaEdenemist());
        this.heli.addEventListener('ended', () => this.jargLaul());
    }

    LaeLaul(index) {
	//Laeme laulu index-i põhjal, nimi ja src "järjend"
        const Laul = this.laulud[index];
        this.heli.src = Laul.src;
        this.lauluTiitel.textContent = Laul.title;
        this.edenemisRiba.value = 0;
    }

    togglePlayPause() {
	//Toggle kuulamise ja pausi vahel
        if (this.isPlaying) {
            this.PausLaul();
        } else {
            this.pleiLaul();
        }
    }

    pleiLaul() {
        this.isPlaying = true;
        this.mangPauseBtn.textContent = '⏸';
        this.heli.play();
    }

    PausLaul() {
        this.isPlaying = false;
        this.mangPauseBtn.textContent = '⏵';
        this.heli.pause();
    }

    eelLaul() {
	//Eelmise laulu valimine, index - 1
        this.PrgLaulIndeks--;
        if (this.PrgLaulIndeks < 0) {
            this.PrgLaulIndeks = this.laulud.length - 1;
        }
        this.LaeLaul(this.PrgLaulIndeks);
        if (this.isPlaying) {
            this.pleiLaul();
        }
    }

    jargLaul() {
	//Järgmise laulu valimine, index + 1    
        this.PrgLaulIndeks++;
        if (this.PrgLaulIndeks >= this.laulud.length) {
            this.PrgLaulIndeks = 0;
        }
        this.LaeLaul(this.PrgLaulIndeks);
        if (this.isPlaying) {
            this.pleiLaul();
        }
    }

    setRibaPos() {
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

//heartpartstrings järjend
const heartpartstrings = [
    { title: 'heart pa', src: './muusika/suri - heart part strings - 01 heart pa.mp3' },
    { title: 'sister to sister', src: './muusika/suri - heart part strings - 02 sister to sister.mp3' },
    { title: 'deaths', src: './muusika/suri - heart part strings - 03 deaths.mp3' },
    { title: 'BLEED', src: './muusika/suri - heart part strings - 04 BLEED.mp3' },
    { title: 'NULL', src: './muusika/suri - heart part strings - 05 NULL.mp3' },
    { title: 'we are', src: './muusika/suri - heart part strings - 06 we are.mp3' },
    { title: 'uni', src: './muusika/suri - heart part strings - 07 uni.mp3' },
    { title: 'rt strings', src: './muusika/suri - heart part strings - 08 rt strings.mp3' },
    { title: 'clarity', src: './muusika/suri - heart part strings - 09 clarity.mp3' },
];

//pleier nr.1
const heartPlayer = new MuusikaMangijaFN('heartpartstrings', heartpartstrings);

//pearlname järjend
const pearlname = [
    { title: 'heavy rocks', src: './muusika/suri - pearl name - 01 heavy rocks.mp3' },
    { title: 'blink', src: './muusika/suri - pearl name - 02 blink.mp3' },
    { title: 'vanishing point', src: './muusika/suri - pearl name - 03 vanishing point.mp3' },
];

//pleier nr.2
const pearlPlayer= new MuusikaMangijaFN('pearlname', pearlname);

