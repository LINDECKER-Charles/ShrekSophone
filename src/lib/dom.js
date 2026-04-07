export function getLinks(selector) {
  return document.querySelectorAll(selector);
}

export function setAllLink(links, vid) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (!vid.src) {
        vid.src = vid.dataset.src;
        vid.load();
      }

      // Remplace tout le body.
      document.body.innerHTML = "";
      document.body.appendChild(vid);

      // Debloque le son.
      vid.muted = false;
      vid.volume = 1.0;
      vid.play();

      // Fullscreen cross-browser.
      if (vid.requestFullscreen) vid.requestFullscreen();
      else if (vid.webkitRequestFullscreen) vid.webkitRequestFullscreen();
      else if (vid.mozRequestFullScreen) vid.mozRequestFullScreen();
      else if (vid.msRequestFullscreen) vid.msRequestFullscreen();
    });
  });
}

export function cleanLink(links) {
  links.forEach((link) => {
    link.removeAttribute("href");
    link.onclick = null;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });
}
