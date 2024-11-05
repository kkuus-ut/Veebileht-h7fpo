let audioList = [
	{
		"laulu-tiitel": "heart pa",
		"allikas": "muusika/heart-pa.mp3"
	},
	{
		"laulu-tiitel": "sister to sister",
		"allikas": "muusika/sister-to-sister.mp3"
	}
];

let PrgAudio = new Audio();
let PrgLaul = 0;

const PleierBaar = document.getElementById("baar");
const PleierBaarAeg = document.getElementById("aeg-prg");
const PleierNupp = document.querySelector(".start-stop-nupp");
const MuusikaInfo = document.querySelector("#laulu-info .laulu-tiitel");

function LaeLaul(indeks) {
	const audio = audioList[indeks];
	MuusikaInfo.textContent = audio["laulu-tiitel"];
	PrgAudio.src =  audio.allikas;
	PrgAudio.load();
}

function UuendaBaari() {
	const LauluProt = (PrgAudio.currentTime / PrgAudio.duration) * 100;
	PleierBaarAeg.style.wifth = LauluProt + "%";
}

function TogglePlei() {
	if (PrgAudio.paused) {
		PrgAudio.play();
		PleierNupp.innerHTML = '<i class="fas fa-pause"></i>';
	}
	else
	{
		PrgAudio.pause();
		PleierNupp.innerHTML = '<i class="fas fa-play"></i>'
	}
}

PleierNupp.addEventListener("click", TogglePlei);
PrgAudio.addEventListener("timeupdate",UuendaBaari);
PrgAudio.addEventListener("ended", () => {
	PleierNupp.innerHTML = '<i class="fas fa-play"></i>';
});

LaeLaul(PrgLaul);
