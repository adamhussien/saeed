'use strict'
const list = document.querySelector(".list")
const close = document.querySelector(".close")
const open = document.querySelector(".ham")
close.addEventListener("click", function() {
    list.classList.remove("active")
})
open.addEventListener("click", function() {
    list.classList.add("active")
})

document.querySelectorAll(".imagepop").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-image span").onclick = () =>{
    document.querySelector(".popup-image").style.display = "none";
}




    const firstn = document.querySelector(".firstname");
    const lastnamet = document.querySelector(".lastname");
    const emaill = document.querySelector(".emaill");
    const firsterr = document.querySelector(".firstname + .errormessage");
    const lastnameerr = document.querySelector(".lastname + .errormessage");
    const emaillerr = document.querySelector(".emaill + .errormessage");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        if (firstn?.value.trim() === '') {
            firsterr.textContent = "Name cannot be empty";
            firstn.classList.add("error");
            firstn.classList.remove("success");
            isValid = false;
        } else {
            firsterr.textContent = "";
            firstn.classList.add("success");
            firstn.classList.remove("error");
        }

        if (lastnamet?.value.trim() === '') {
            lastnameerr.textContent = "Name cannot be empty";
            lastnamet.classList.add("error");
            lastnamet.classList.remove("success");
            isValid = false;
        } else {
            lastnameerr.textContent = "";
            lastnamet.classList.add("success");
            lastnamet.classList.remove("error");
        }

        if (emaill?.value.trim() === '') {
            emaillerr.textContent = 'Email is required';
            emaill.classList.add("error");
            emaill.classList.remove("success");
            isValid = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emaill.value.trim())) {
            emaillerr.textContent = 'Please enter a valid email';
            emaill.classList.add("error");
            emaill.classList.remove("success");
            isValid = false;
        } else {
            emaillerr.textContent = "";
            emaill.classList.add("success");
            emaill.classList.remove("error");
        }

        if (isValid) {
            emailjs.sendForm('service_n97w37m', 'template_5ptf5qd', this)
                .then(function() {
                    alert('Email sent successfully!');
                    document.getElementById('contact-form').reset();
                    firstn.classList.remove("success", "error");
                    lastnamet.classList.remove("success", "error");
                    emaill.classList.remove("success", "error");
                }, function(error) {
                    alert('Failed to send email. Error: ' + JSON.stringify(error));
                });
        }
    });

const sections = document.querySelectorAll("section")
const revealsec  = function(entries, observer){
    const [entry] = entries
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section-hideen')
observer.unobserve(entry.target)

}
const sectionbserver = new IntersectionObserver(revealsec,{
    root: null,
    threshold: 0.17
})
sections.forEach(sec =>{
    sectionbserver.observe(sec)
    sec.classList.add("section-hideen")
})




    const images = document.querySelectorAll('.imagefade');
    let delay = 0;

    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
        }, delay);
        delay += 1000; // Adjust the delay as needed (2 seconds between images in this case)
    });


        const revealElements = document.querySelectorAll('.revealcontent');
    
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            revealElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('visiblecontent');
                    el.classList.remove('hiddencontent');
                } else {
                    el.classList.remove('visiblecontent');
                    el.classList.add('hiddencontent');
                }
            });
        };
    
        window.addEventListener('scroll', revealOnScroll);
    
        // Initial check in case elements are already in view
        revealOnScroll();
   
