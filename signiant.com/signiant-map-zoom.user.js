// ==UserScript==
// @name        Signiant map zoom button
// @namespace   Violentmonkey Scripts
// @match       https://console.signiant.com/jet/dashboard*
// @grant       none
// @version     1.3
// @author      Ruben Leikarnes
// @updateURL   https://github.com/rubenleikarnes/userscripts/raw/master/signiant.com/signiant-map-zoom.user.js
// ==/UserScript==


(function() {
  'use strict';

  let delayInMilliseconds = 10000;

  setTimeout(function() {
    console.log("Running after " + delayInMilliseconds + " ms delay")

    let sMap = document.querySelector(".markercluster-map")
    let btn = document.createElement("button")
    let title = document.createElement("h2")
    let isZoomed = false

    function mapZoom() {
      console.log("zoom")

      if (!isZoomed) {
        sMap.style.position = "absolute"
        sMap.style.zIndex = "9990"
        sMap.style.top = "0"
        sMap.style.left = "0"

        isZoomed = true
      } else if (isZoomed) {
        sMap.style.position = "relative"

        isZoomed = false
      }
    }

    btn.style.position = "absolute"
    btn.style.zIndex = "9999"
    btn.style.right = "50px"
    btn.style.bottom = "50px"
    btn.style.background = "#eee"
    btn.style.color = "#000"
    btn.style.cursor = "nesw-resize"
    btn.innerHTML = "<->"

    title.style.position = "absolute"
    title.style.zIndex = "9999"
    title.style.right = "430px"
    title.style.top = "-32px"
    title.style.color = "#eee"
    title.style.fontSize = "32px"
    title.innerHTML = "Jet Deliveries"

    btn.addEventListener("click", function() {
      console.log("zooming")
      mapZoom()
    });

    sMap.appendChild(btn)
    sMap.appendChild(title)
  }, delayInMilliseconds);
})();
