(function () {
  function unleashShrekOnAll(videoSrc = "shrek.mp4") {
    const btns = document.querySelectorAll(".shrek-troll");
    if (!btns.length) return;

    // Crée la vidéo
    const vid = document.createElement("video");
    vid.src = videoSrc;
    vid.autoplay = true;
    vid.loop = true;
    vid.controls = false;
    vid.style.position = "fixed";
    vid.style.top = 0;
    vid.style.left = 0;
    vid.style.width = "100%";
    vid.style.height = "100%";
    vid.style.objectFit = "cover";
    vid.style.zIndex = 9999;

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remplace tout le body
        document.body.innerHTML = "";

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

  // Rendre accessible globalement
  window.unleashShrekOnAll = unleashShrekOnAll;
})();

unleashShrekOnAll("shrek.mp4");
