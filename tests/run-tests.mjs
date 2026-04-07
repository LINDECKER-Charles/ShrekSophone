import assert from "node:assert/strict";

import { cleanLink, getLinks, setAllLink } from "../src/lib/dom.js";
import { loadvideo } from "../src/lib/video.js";

function createClickableElement() {
  const listeners = new Map();

  return {
    attributes: { href: "#" },
    onclick: () => "legacy-handler",
    addEventListener(type, handler) {
      listeners.set(type, handler);
    },
    removeAttribute(name) {
      delete this.attributes[name];
    },
    dispatch(type, event = {}) {
      const handler = listeners.get(type);
      if (handler) {
        handler(event);
      }
    }
  };
}

const cases = [
  {
    name: "getLinks delegates the selector to querySelectorAll",
    run() {
      const expectedNodes = [{ id: "a" }, { id: "b" }];
      let receivedSelector = null;

      globalThis.document = {
        querySelectorAll(selector) {
          receivedSelector = selector;
          return expectedNodes;
        }
      };

      const result = getLinks(".shrek-troll");

      assert.equal(receivedSelector, ".shrek-troll");
      assert.equal(result, expectedNodes);
    }
  },
  {
    name: "cleanLink removes href, clears inline onclick and blocks default click behavior",
    run() {
      const element = createClickableElement();
      let defaultPrevented = false;
      let propagationStopped = false;

      cleanLink([element]);
      element.dispatch("click", {
        preventDefault() {
          defaultPrevented = true;
        },
        stopPropagation() {
          propagationStopped = true;
        }
      });

      assert.equal(element.attributes.href, undefined);
      assert.equal(element.onclick, null);
      assert.equal(defaultPrevented, true);
      assert.equal(propagationStopped, true);
    }
  },
  {
    name: "setAllLink replaces the page content and starts the video in fullscreen",
    run() {
      const element = createClickableElement();
      let appendedNode = null;
      let playCalls = 0;
      let fullscreenCalls = 0;

      globalThis.document = {
        body: {
          innerHTML: "<main>initial content</main>",
          appendChild(node) {
            appendedNode = node;
          }
        }
      };

      const video = {
        muted: true,
        volume: 0,
        play() {
          playCalls += 1;
        },
        requestFullscreen() {
          fullscreenCalls += 1;
        }
      };

      setAllLink([element], video);
      element.dispatch("click");

      assert.equal(globalThis.document.body.innerHTML, "");
      assert.equal(appendedNode, video);
      assert.equal(video.muted, false);
      assert.equal(video.volume, 1);
      assert.equal(playCalls, 1);
      assert.equal(fullscreenCalls, 1);
    }
  },
  {
    name: "loadvideo creates a fullscreen muted looping video element",
    run() {
      const createdElements = [];

      globalThis.document = {
        createElement(tagName) {
          const element = {
            tagName,
            style: {}
          };
          createdElements.push(element);
          return element;
        }
      };

      const video = loadvideo();

      assert.equal(createdElements.length, 1);
      assert.equal(createdElements[0], video);
      assert.equal(video.tagName, "video");
      assert.equal(video.src, "https://shrek.charles-lindecker.com/shrek.mp4");
      assert.equal(video.autoplay, true);
      assert.equal(video.loop, true);
      assert.equal(video.controls, false);
      assert.equal(video.muted, true);
      assert.equal(video.volume, 0);
      assert.deepEqual(video.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 9999
      });
    }
  }
];

let failed = false;

for (const testCase of cases) {
  try {
    testCase.run();
    console.log(`PASS ${testCase.name}`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${testCase.name}`);
    console.error(error);
  }
}

if (failed) {
  process.exitCode = 1;
}
