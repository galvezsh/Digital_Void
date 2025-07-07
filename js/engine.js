'use strict';

class NavBar {

    /**
     * @param {document} html The HTML document for access to the HTML blocks
     * @param {string} title The title that will appers in the right side of the Navbar
     */
    constructor( document, STRINGS, title, navItemSelected ) {
        const img = document.querySelector("nav img");
        const ul = document.querySelector("nav ul");
        const navItems = {
            [STRINGS.start]: [STRINGS.startLink],
            [STRINGS.portfolio]: [STRINGS.portfolioLink],
            [STRINGS.proyects]: [STRINGS.proyectsLink],
            [STRINGS.about]: [STRINGS.aboutLink]
        };

        document.querySelector("nav span").textContent = title;
        img.src = "resources/images/" + STRINGS.developerImgLink;
        img.alt = STRINGS.developerImgAlt;
        img.style.width = "36px";

        Object.entries( navItems ).forEach( ([text, href]) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            
            a.textContent = text;
            a.href = href;
            
            if ( text === navItemSelected ) {
                a.classList.add("active");
            }
            
            li.appendChild(a);
            ul.appendChild(li);
        });
    }
}

class Toast {

    /**
     * 
     * @param {document} document The HTML document for access to the HTML blocks
     */
    constructor( document, STRINGS ) {

        this.strings = STRINGS;
        this.toast = document.querySelector("div.toast");
        this.header = document.querySelector("div.toast div.header");
        this.body = document.querySelector("div.toast div.body");

        this.headerStyle = "";
        this.finishedToast = true;

        /** Arrow function storing the handler for the "animationend" event.
        * Ensures consistent use of the same function reference for adding and removing the event listener,
        * maintaining the correct context (this) within the Toast class */
        this.animationEndHandler = () => this.removeAnimationToast();
    }

    /** This method shows a toast that receives 3 parameters, in which based on the information received, 
     * the user will be informed about that data
     * 
     * @param {int} level The gravity lever of the Toast
     * @param {string} newContext The context of the Toast
     * @param {int} timeout The lifetime of the Toast
     * */
    showToast( level, newContext, timeout ) {

        if (this.finishedToast == true) {
            this.finishedToast = false;
    
            // HeaderStyle
            if (level == 0) {
                this.headerStyle = "bg-info";
                this.header.textContent = this.strings.info;
        
            } else if (level == 1) {
                this.headerStyle = "bg-warning";
                this.header.textContent = this.strings.warning;
        
            } else {
                this.headerStyle = "bg-error";
                this.header.textContent = this.strings.error;
        
            }
        
            this.header.classList.add( this.headerStyle );
            this.body.textContent = newContext;
            this.toast.style.display = "block";
        
            // AutoHide
            setTimeout(() => this.hideToast(), timeout * 1000);
    
        } else {
            console.log( this.strings.info + ": " + this.strings.blockedToast );
        }
    }

    /** This method hides the toast shown above */
    hideToast() {
        this.toast.classList.add("animation-fadeOutDown");
        this.toast.addEventListener("animationend", this.animationEndHandler);
    }
    
    /** This method eliminates the listening event from the toast exit animation, since as it has been added through 
     * JavaScript, it must also be eliminated so that it does not produce errors, otherwise the events would overlap 
     * and errors would occur. */
    removeAnimationToast() {
        this.toast.classList.remove("animation-fadeOutDown");
        this.header.classList.remove( this.headerStyle );
        this.toast.removeEventListener("animationend", this.animationEndHandler);
        this.toast.style.display = "none";

        this.finishedToast = true;
    }
}

class Modal {

    /**
     * 
     * @param {document} document The HTML document for access to the HTML blocks
     */
    constructor( document ) {

        this.modal = document.querySelector("div.modal");
        this.header = document.querySelector("div.modal div.header");
        this.body = document.querySelector("div.modal div.body");
        this.primaryButton = document.querySelector("div.modal button.primary");
        this.secondaryButton = document.querySelector("div.modal button.secondary");

        /** Arrow function storing the handler for the "animationend" event.
        * Ensures consistent use of the same function reference for adding and removing the event listener,
        * maintaining the correct context (this) within the Toast class */
        this.animationEndHandler = () => this.removeAnimationModal();
    }

    /** This method shows a modal that receives 4 parameters, in which based on the information received, 
     * the user will be informed about that data
     * 
     * @param {string} newTitle The title of the Modal
     * @param {string} newContext The context of the Modal
     * @param {string} primButton The text for the first button of the Modal
     * @param {string} secnButton The text for the second button of the Modal
     *   */
    showQuestionModal( newTitle, newContext, primButton, secnButton ) {
        this.header.innerHTML = newTitle;
        this.body.innerHTML = newContext;
        this.primaryButton.textContent = primButton;
        this.secondaryButton.textContent = secnButton;
        this.primaryButton.style.display = "inline-block";
        this.modal.style.display = "block";
    }

    /** This method shows a modal that receives 3 parameters, in which based on the information received, 
     * the user will be informed about that data
     * 
     * @param {string} newTitle The title of the Modal
     * @param {string} newContext The context of the Modal
     * @param {string} secnButton The text for the second button of the Modal
     *   */
    showInfoModal( newTitle, newContext, secnButton ) {
        this.header.innerHTML = newTitle;
        this.body.innerHTML = newContext;
        this.secondaryButton.textContent = secnButton;
        this.primaryButton.style.display = "none";
        this.modal.style.display = "block";
    }

    /** This method hides the modal shown above */
    hideModal() {
        this.modal.classList.add("animation-fadeOut");
        this.modal.addEventListener("animationend", this.animationEndHandler);
    }

    /** This method eliminates the listening event from the toast exit animation, since as it has been added through 
     * JavaScript, it must also be eliminated so that it does not produce errors, otherwise the events would overlap 
     * and errors would occur. */
    removeAnimationModal() {
        this.modal.classList.remove("animation-fadeOut");
        this.modal.removeEventListener("animationend", this.animationEndHandler);
        this.modal.style.display = "none";
    }
}

class Footer {

    /**
     * @param {document} document The HTML document for access to the HTML blocks
     */
    constructor( document, STRINGS) {
        document.querySelector("footer span").innerHTML = "&copy; " + STRINGS.websiteName + " - " + new Date().getFullYear();
        document.querySelector("footer ul li.yt a").href = STRINGS.youtubeLink;
        document.querySelector("footer ul li.tw a").href = STRINGS.twitchLink;
        document.querySelector("footer ul li.di a").href = STRINGS.discordLink;
        document.querySelector("footer ul li.in a").href = STRINGS.instagramLink;
        document.querySelector("footer ul li.gh a").href = STRINGS.githubLink;
        document.querySelector("footer ul li.li a").href = STRINGS.linkedinLink;
    }
}

class Cookie {

    /**
     * @param {document} html The HTML document for access to the cookies
     */
    constructor( document ) {
        this.document = document;
    }

    /** 
     * Gets the content of the cookie that is specified by parameter
     * 
     * @param {string} cookieName The name of the cookie
     * @returns Return the value of the cookie. If it does not exist, it returns null
     */
    getCookie(cookieName) {
        let cookies = this.document.cookie.split('; ');

        for (let cookie of cookies) {
            let [name, value] = cookie.split('=');

            if (name === cookieName) 
                return decodeURIComponent(value);
            
        }

        return "null";
    }

    /** 
     * Creates the cookie with the values received by parameter 
     * 
     * @param {string} name The name of the cookie
     * @param {string} value The internal value of the cookie
     * @param {int} days The lifetime of the cookie
     * */   
    setCookie(name, value, days) {
        let expirationDate = new Date();
        expirationDate.setDate( expirationDate.getDate() + days );
      
        this.document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; SameSite=Lax';
    }

    /**
     * This function reset all the cookies to their default values
     */
    resetCookies() {
        this.setCookie( "firstLogin", "false", 7 );
        this.setCookie( "locale", "en", 7 );
    }
}

class Html {

     /**
     * @param {document} html The HTML document for access to the HTML blocks
     * @param {string} title The title of the HTML
     * @param {string} navTitle The label of the navbar
     */
    constructor( document, STRINGS, docTitle, navTitle, navItemSelected ) {
        this.navbar = new NavBar( document, STRINGS, navTitle, navItemSelected );
        this.toast = new Toast( document, STRINGS );
        this.modal = new Modal( document );
        this.footer = new Footer( document, STRINGS );
        this.cookie = new Cookie( document );

        document.title = docTitle + ": " + navItemSelected;

        // SET LOCALE ON THE HTML
        Object.entries( STRINGS ).forEach( ([key, value]) => {
            const element = document.getElementById(key);
            if (element) {
                // If the element is a <button> or an <input>
                if (element.tagName === "INPUT" || element.tagName === "BUTTON") {
                    element.value = value;
                    element.textContent = value;
                } else {
                    element.textContent = value;
                }
            }
        });

        // Check if is the first time of the user in the website
        if ( this.cookie.getCookie( "firstLogin" ) != "true" ) {
            this.firstStart( STRINGS );
        }
    }

    /**
     * This function performs a series of special events if it is the first time the user visits the web page
     */
    firstStart( STRINGS ) {
        this.toast.showToast(1, STRINGS.betaSite, 8);
        this.cookie.setCookie( "firstLogin", "true", 7);
        this.cookie.setCookie( "locale", "en", 7);
    }
}