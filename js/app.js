/*  sticky header  */

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav-menu");
    header.classList.toggle("sticky", window)
  })

/* create responsive mobile menu */  

const navMenu = () => {
    const mobilemenu = document.querySelector(".mobilemenu");
    const nav = document.querySelector(".nav-links");
    
    mobilemenu.addEventListener('click', ()=> {
      nav.classList.toggle('nav-links-active')
    })
}
    
    navMenu(); 

/*  creating nav list */

const navLinks = document.getElementById('nav-links');
const sec = document.querySelectorAll('section');

Array.from(sec);

let navNum = sec.length;

function createLi () {
    for (section of sec) {
        secLink = section.getAttribute('id');
        secName = section.getAttribute('data-nav');
        liLink = document.createElement('li');
        liLink.innerHTML = `<a class = 'nav-links' href = '#${secLink}'>${secName}</a> `;
        navLinks.appendChild(liLink);
    }
}

/* find active section */

function current(par) {
    let secpar = par.getBoundingClientRect();
    return (secpar.top >= 0 && secpar.top < 300); 
}

function activeSec() {
    for (section of sec) {
        if (current(section)) {
            if (!section.classList.contains('body')) {

            section.classList.add('body');    
            }
        }
        else {
            section.classList.remove('body')
        }
    }
}
createLi();
document.addEventListener('scroll', activeSec);

/* button that returns user to top of page */

const sendItButton = document.getElementById('senditbtn');
window.onscroll = function () { scroll()} ;
function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        sendItButton.style.display = "block";

    } else {
        sendItButton.style.display = "none";
    } 
}

function sendIt() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}