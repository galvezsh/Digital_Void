'use strict';

import Strings from "../languages/strings.js";
import { Html, Cookie } from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const STRINGS = new Strings( new Cookie( document ).getCookie( "locale" ) );
new Html( document, STRINGS, STRINGS.websiteName, STRINGS.navbarProjects );

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
