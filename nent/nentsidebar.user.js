// ==UserScript==
// @name        New script - nentsportbooking.com
// @namespace   Violentmonkey Scripts
// @match       https://www.nentsportbooking.com/productions/overview
// @grant       none
// @version     1.0
// @author      -
// @description 11/20/2020, 10:40:41 AM
// ==/UserScript==

(function() {
	'use strict';

	console.log("Starting Violentmonkey script");

  document.querySelector('head').innerHTML += '<style>.book-sidebar, .book-sidebar-sticky {width: 400px !important;}</style>';
})();
