'use strict';

import Toast from './components/toast.js';
import Modal from './components/modal.js';
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';

export class Cookie {

    /**
     * Creates a new Cookie helper instance.
     * 
     * @param {Document} document The HTML document used to access and manipulate cookies.
     */
    constructor( document ) {
        this.document = document;
        this.lifetimeCookie = 30;
    }

    /**
     * Retrieves the value of a specific cookie.
     * 
     * @param {string} cookieName The name of the cookie to retrieve.
     */
    getCookie( cookieName ) {
        let cookies = this.document.cookie.split('; ');

        for ( let cookie of cookies ) {
            let [name, value] = cookie.split('=');

            if (name === cookieName) 
                return decodeURIComponent(value);
            
        }

        return "null";
    }

    /**
     * Sets a cookie with the specified name and value.
     * 
     * @param {string} name The name of the cookie.
     * @param {string} value The value to store in the cookie.
     * @param {number} days (opcional) The number of the days of the cookie for stay 'active'.
     */
    setCookie( name, value, days = this.lifetimeCookie ) {
        let expirationDate = new Date();
        expirationDate.setDate( expirationDate.getDate() + days );
      
        this.document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; SameSite=Lax';
    }

    /**
     * Resets all relevant cookies to their default values.
     */
    resetCookies() {
        this.setCookie( "logged", "false" );
        this.setCookie( "locale", "en" );
        this.setCookie( "theme", "dark" );
    }
}

export class Html {

    /**
     * Initializes the HTML layout and sets localized content, theme, and startup behavior.
     * 
     * @param {Document} document The HTML document used for DOM manipulation.
     * @param {object} STRINGS An object containing static strings for localization.
     * @param {object} COOKIE An object containing statics methods for managing cookies.
     * @param {string} navItemSelected The selected navigation item used as the page title suffix.
     */
    constructor( document, STRINGS, COOKIE, navItemSelected ) {
        this.navbar = new NavBar( document, STRINGS, navItemSelected );
        this.toast = new Toast( document, STRINGS );
        this.modal = new Modal( document );
        this.footer = new Footer( document, STRINGS );

        document.title = STRINGS.websiteName + ": " + navItemSelected;

        this.setTheme( document, COOKIE );
        this.setLocale( document, STRINGS );

        // Trigger first-time setup if user has not been logged before
        if ( COOKIE.getCookie( "logged" ) != "true" ) {
            this.firstStart( COOKIE );
        }
    }

    /**
     * Applies the selected theme to the document based on the stored cookie.
     * 
     * @param {Document} document The HTML document where the theme will be applied.
     * @param {object} COOKIE An object containing statics methods for managing cookies.
     */
    setTheme( document, COOKIE ) {
        if ( COOKIE.getCookie("theme") == "light" )
            document.body.classList.add("light");
    }

    /**
     * Populates HTML elements with localized strings based on their IDs.
     * 
     * @param {Document} document The HTML document containing the elements to update.
     * @param {object} STRINGS An object containing localized string values, where each key matches an element ID.
     */
    setLocale( document, STRINGS ) {
        Object.entries( STRINGS ).forEach( ([key, value]) => {
            const element = document.getElementById(key);

            if ( element ) {
                element.innerHTML += value;
            }
        });
    }

    /**
     * Performs first-time setup operations, such as displaying a toast and initializing cookies.
     * 
     * @param {Cookie} COOKIE An instance of the Cookie class used to persist setup state.
     */
    firstStart( COOKIE ) {
        this.toast.showToast(1, "This website is under development and not yet finished. You may experience issues, especially on small screens. 🚧🔧🔨", 8);
        
        COOKIE.setCookie( "logged", "true" );
        COOKIE.setCookie( "locale", "en" );
        COOKIE.setCookie( "theme", "dark" );
    }
}