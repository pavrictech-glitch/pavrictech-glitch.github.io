/* ======================================
   PAVRIC TECH PORTFOLIO
====================================== */

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Active navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// Navbar shadow

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

    }else{

        header.style.boxShadow="none";

    }

});

// Fade animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});

document.querySelectorAll(

".service-card,.project-card,.testimonial-card,.stat-card,.skill"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// Counter Animation

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll",()=>{

    const about = document.querySelector(".about");

    if(!about) return;

    if(window.scrollY > about.offsetTop-300 && !started){

        started = true;

        counters.forEach(counter=>{

            const text = counter.innerText;

            const number = parseInt(text);

            let count = 0;

            const speed = number / 50;

            const update = ()=>{

                count += speed;

                if(count < number){

                    counter.innerText = Math.floor(count)+"+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = text;

                }

            }

            update();

        });

    }

});

// Skill bar animation

const progressBars = document.querySelectorAll(".progress div");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const width = entry.target.style.width;

            entry.target.style.width="0";

            setTimeout(()=>{

                entry.target.style.transition="1.5s";

                entry.target.style.width=width;

            },200);

        }

    });

});

progressBars.forEach(bar=>{

    skillObserver.observe(bar);

});

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#8b5cf6";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Footer year

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML = `© ${new Date().getFullYear()} Pavric Tech. All Rights Reserved.`;

}

console.log("Pavric Tech Portfolio Loaded Successfully");
