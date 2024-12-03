// Kood on kirjutatud chatGPT koodist inspireeritult kasutades interneti ressursse
document.addEventListener("DOMContentLoaded" , function() {

    const pildid = document.querySelector("#contain");
    let index = 0;
    const tekstid = ["Kuula Heart part strings", "Kuula Pearl name"];
    const albumi_nimi = document.getElementById("albumi_nimi")
    
    function uuenda(){
        // liigutab elemente vasakule, elemendi alast valja ja peidab need elemendid.
        if (index==1) {
            index = 0;
        } else {
            index = 1;
        }
        pildid.style.transform = `translateX(-${index * 100}%)`;
        albumi_nimi.innerText = tekstid[index]
    }
    
    setInterval(uuenda, 3500);
});
