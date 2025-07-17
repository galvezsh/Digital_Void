'use strict';

import es from './es.js';
import en from './en.js';

const LANGUAGES = { es, en };

export default class Strings {

    constructor( language_code ) {
        // LINKS
        Object.assign(this, {
            // WEBSITE
            websiteVersion: "v0.4.6_Beta (2025.07)",
            websiteDevelopers: "Alberto Gálvez (galvezsh)",

            // NAVBAR
            navbarStartLink: "/home",
            navbarProjectsLink: "/projects",
            navbarAboutLink: "/about",

            // FOOTER
            youtubeLink: "https://www.youtube.com/@galvezsh",
            twitchLink: "#",
            discordLink: "https://discord.gg/HFKWyEJ8",
            instagramLink: "https://www.instagram.com/sr.garvez/",
            githubLink: "https://github.com/galvezsh",
            linkedinLink: "https://www.linkedin.com/in/alberto-galvez-gandullo-01838a244/",
            emailLink: "alberto.galvez.n7@gmail.com",

            // DOCS
            diyServerDoc: "/projects/ryzen",
            minecraftServersDoc: "/projects/minecraft",
            flipperZeroDoc: "/projects/flipperzero"

        });

        // LOCALE
        if ( language_code != "null" ) {
            Object.assign( this, LANGUAGES[ language_code ] )
        } else {
            Object.assign( this, en )
        }
    }
}