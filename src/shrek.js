/* global unleashShrekOnAll */
import { loadvideo } from './lib/video.js';
import { getLinks, setAllLink } from './lib/dom.js'; 

(function () {
  function unleashShrekOnAll() {
    const btns = getLinks(".shrek-troll");
    if (!btns.length) return;
    const vid = loadvideo();
    setAllLink(btns, vid);
  }

  // Rendre accessible globalement
  window.unleashShrekOnAll = unleashShrekOnAll;
})();

document.addEventListener("DOMContentLoaded", () => {
  unleashShrekOnAll();
});
