'use strict';

import Strings from "../languages/strings.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const STRINGS = new Strings( new Cookie( document ).getCookie( "locale" ) );
const HTML = new Html( document, STRINGS, STRINGS.websiteName, STRINGS.aboutNavbarLabel, STRINGS.about );

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.querySelector("#websiteConfigLocaleEn").addEventListener("click", () => switchLanguage( "en" ));
document.querySelector("#websiteConfigLocaleEs").addEventListener("click", () => switchLanguage( "es" ));

document.querySelector("#modalCancel").addEventListener("click", () => HTML.modal.hideModal());
document.querySelector("#websiteConfigRestoreButton").addEventListener("click", () => resetCookies());

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function switchLanguage( language_code ) {
    new Cookie( document ).setCookie( "locale", language_code, 7 );
    location.reload();
}

function resetCookies() {
    HTML.modal.showQuestionModal( STRINGS.resetCookiesHead, STRINGS.resetCookiesBody, STRINGS.apply, STRINGS.cancel );
    document.querySelector("#modalApply").addEventListener("click", () => {
        HTML.cookie.resetCookies();
        location.reload();
    });
}