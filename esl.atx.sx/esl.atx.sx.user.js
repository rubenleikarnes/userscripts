// ==UserScript==
// @name         ESL Facebook stream | ATX.sx
// @namespace    https://esl.atx.sx/
// @version      0.1.1
// @description  try to take over the world!
// @author       Ruben
// @match        https://esl.atx.sx/
// @grant        none
// @run-at       document-end
// @updateURL    https://github.com/rub1/userscripts/raw/master/esl.atx.sx.user.js
// ==/UserScript==

(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"    body {background-color: #000 !important; color: #fff;}",
	"    .dash-video-player {width: 100%;}",
	"    .container {max-width: 100%;}",
    "    .tabs-section, .additions-panel, .footer-area {display: none;}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
