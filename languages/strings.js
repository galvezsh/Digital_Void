'use strict';

import es from './es.js';
import en from './en.js';

const LANGUAGES = { es, en };

class Strings {

    constructor( language_code ) {
        // LINKS
        Object.assign(this, {
            // NAVBAR
            developerImgLink: "developer.png",
            startLink: "start.html",
            portfolioLink: "portfolio.html",
            proyectsLink: "proyects.html",
            aboutLink: "about.html",

            // FOOTER
            youtubeLink: "https://www.youtube.com/@galvezsh",
            twitchLink: "#",
            discordLink: "https://discord.gg/HFKWyEJ8",
            instagramLink: "https://www.instagram.com/sr.garvez/",
            githubLink: "https://github.com/galvezsh",
            linkedinLink: "https://www.linkedin.com/in/alberto-galvez-gandullo-01838a244/",

        });

        // LOCALE
        if ( language_code != "null" ) {
            Object.assign( this, LANGUAGES[ language_code ] )
        } else {
            Object.assign( this, en )
        }
    }
}

export default Strings;