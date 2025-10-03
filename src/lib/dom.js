export function getLinks(selector) {
    return document.querySelectorAll(selector);
}

export function setAllLink(links, vid){
    links.forEach((link) => {
      link.addEventListener("click", () => {
        // Remplace tout le body
        document.body.innerHTML = "";
        // Crée la vidéo
        document.body.appendChild(vid);

        // Débloque le son
        vid.muted = false;
        vid.volume = 1.0;
        vid.play();

        // Fullscreen cross-browser
        if (vid.requestFullscreen) vid.requestFullscreen();
        else if (vid.webkitRequestFullscreen) vid.webkitRequestFullscreen();
        else if (vid.mozRequestFullScreen) vid.mozRequestFullScreen();
        else if (vid.msRequestFullscreen) vid.msRequestFullscreen();
      });
    });
}