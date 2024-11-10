//info lehele nupp
function RedirectToInfo() {
    window.location.href = "info.html";
}

document.addEventListener("DOMContentLoaded", () =>{
    const button = document.getElementById("infoNupp");

    // //kui nuppu vajutatakse saadetakse info lehele
    // button.addEventListener("click", RedirectToInfo);
});

//kodu lehele nupp
function RedirectToKodu() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () =>{
    const button = document.getElementById("koduNupp");

    //kui nuppu vajutatakse saadetakse kodu lehele
    // button.addEventListener("click", RedirectToKodu);
});

//muusika lehele nupp
function RedirectToMuusika() {
    window.location.href = "muusika.html";
}

document.addEventListener("DOMContentLoaded", () =>{
    const button = document.getElementById("muusikaNupp");

    //kui nuppu vajutatakse saadetakse muusika lehele
    // button.addEventListener("click", RedirectToMuusika);
});