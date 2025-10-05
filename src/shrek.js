/* global unleashShrekOnAll */
import { loadvideo } from './lib/video.js';
import { getLinks, setAllLink, cleanLink } from './lib/dom.js'; 

(function () {
  function unleashShrekOnAll() {
    const btns = getLinks(".shrek-troll");
    if (!btns.length) return;
    const vid = loadvideo();
    cleanLink(btns);
    setAllLink(btns, vid);
  }

  // Rendre accessible globalement
  window.unleashShrekOnAll = unleashShrekOnAll;
})();

document.addEventListener("DOMContentLoaded", () => {
  unleashShrekOnAll();
});
