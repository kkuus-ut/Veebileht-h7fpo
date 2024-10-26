function RedirectToInfo() {
    window.location.href = "info.html";
}

document.addEventListener("DOMContentLoaded", () =>{
    const button = document.getElementById("infoNupp");

    //kui nuppu vajutatakse saadetakse info lehele
    button.addEventListener("click", RedirectToInfo);
});