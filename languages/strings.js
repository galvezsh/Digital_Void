'use strict';

import es from './es.js';
import en from './en.js';

const LANGUAGES = { es, en };

export default class Strings {

    constructor( language_code ) {

        // STRINGS
        Object.assign(this, {
            // WEBSITE
            websiteVersion: "v0.4.9_Pre-release (2025.07)",
            websiteDevelopers: "Alberto Gálvez (galvezsh)",

            // STATICS (Only in english because is the default language of the website. Basically for the first login and stuff like this...)
            staticWelcomeVoid: "Welcome to the void",
            staticBetaWebsite: "This website is under development and not yet finished. You may experience issues, especially on small screens. 🚧🔧🔨",

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
            diyServerDoc: "/projects/homelab",
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