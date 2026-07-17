// ===============================
// Pavric Tech Portfolio
// script.js
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

// Highlight active navigation link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.style.color = "#1e293b";

        if(link.getAttribute("href") === "#" + current){

            link.style.color = "#
