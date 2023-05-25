/* Menu Hidden */
    /* Variables */
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
    /* End Variables */

    /* See if toggle exists */
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    /* See if close exists */
    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }
/* End Menu Hidden */

/* Remove Menu Mobile */
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        //click on nav__link ==> remove show-menu
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
/* End Remove Menu Mobile */


/* Icon drop shadow */
    const navIcon = document.querySelectorAll('.home__social-icon')
    function noShadow(){
        const navSocial = document.getElementById('home-social')
        navSocial.classList.remove('home__social-icon-shadow')
    }
    function shadow(){
        const navSocial = document.getElementById('home-social')
        navSocial.classList.add('home__social-icon-shadow')
    }

    navIcon.forEach(n => n.addEventListener('mouseover', noShadow))
    navIcon.forEach(n => n.addEventListener('mouseout', shadow))

    const contactMe = document.getElementById('home-contact-me')
    if(contactMe){
        contactMe.addEventListener('mouseover', () => {
            contactMe.classList.add('shadow-box-alt')
        })
        contactMe.addEventListener('mouseout', () => {
            contactMe.classList.remove('shadow-box-alt')
        })
    }

    const downloadCV = document.getElementById('download-cv')
    if(downloadCV){
        downloadCV.addEventListener('mouseover', () => {
            downloadCV.classList.add('shadow-box-alt')
        })
        downloadCV.addEventListener('mouseout', () => {
            downloadCV.classList.remove('shadow-box-alt')
        })
    }

    const sendMessage = document.getElementById('send-message')
    if(sendMessage){
        sendMessage.addEventListener('mouseover', () => {
            sendMessage.classList.add('shadow-box-alt')
        })
        sendMessage.addEventListener('mouseout', () => {
            sendMessage.classList.remove('shadow-box-alt')
        })
    }

/* End Icon drop shadow */

/* Skills */
    /* Variables */
    const skillsContent = document.getElementsByClassName('skills__content'),
          skillsHeader = document.querySelectorAll('.skills__header')
    /* End Variables */

    //Function
    function toggleSkills(){
        let itemClass = this.parentNode.className
        for(i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }

    }

    /* Check if clicked */
    skillsHeader.forEach(n => n.addEventListener('click', toggleSkills))
/* End Skills */

/* Qualification */
    const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tab.forEach(tab => {
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
    })
/* End Qualification */

/* Services */
    const modelViews = document.querySelectorAll('.services__model'),
          modelBtns = document.querySelectorAll('.services__button'),
          modelClose = document.querySelectorAll('.services__model-close')

    let model = function(modelClick){
        modelViews[modelClick].classList.add('active-model')
    }
    modelBtns.forEach((modelBtn, i) => {
        modelBtn.addEventListener('click', () => {
            model(i)
        })
    })
    modelClose.forEach((modelClose) => {
        modelClose.addEventListener('click', () => {
            modelViews.forEach((modelView) => {
                modelView.classList.remove('active-model')
            })
        })
    })

/* End Services */

/* Portfolio swiper */
    let swiper = new Swiper(".portfolio__container", {
        cssMode: true,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
/* End Portfolio swiper */

/* Scroll section active link */
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;  
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

/* End scroll section active link */


/* Change background header */
    function scrollHeader(){
        const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
/* End Change background header */


/* Scroll to top */
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
/* End scroll to top */

/*==================== DARK LIGHT THEME ====================*/ 
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
/*==================== END DARK LIGHT THEME ====================*/ 
