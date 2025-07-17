'use strict';

import Strings from "../languages/strings.js";
import { Html, Cookie } from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const COOKIE = new Cookie( document );
const STRINGS = new Strings( COOKIE.getCookie( "locale" ) );
new Html( document, STRINGS, COOKIE, STRINGS.navbarProjects );

const LINKS = [ STRINGS.flipperZeroDoc, STRINGS.minecraftServersDoc, STRINGS.diyServerDoc ];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.querySelectorAll("#seeFullDocument").forEach( (link, index) => {
    link.innerHTML += STRINGS.projectsSeeFullDocument;
    link.href = LINKS[ index ];
});

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////
