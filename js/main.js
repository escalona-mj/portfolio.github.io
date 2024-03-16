//responsive menu
let menu = document.querySelector('#hamburger');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    nav.classList.toggle('open');
}

VanillaTilt.init(document.querySelectorAll(".hero-card"), {
    max: 1,
    glare: true,
    "max-glare": 0.125,
	"mouse-event-element": "body"
});

VanillaTilt.init(document.querySelectorAll(".is-glass"), {
	perspective: 1000,
    max: 1,
    glare: true,
    "max-glare": 0.125,
});

VanillaTilt.init(document.querySelector("#navbar"), {
	perspective: 1000,
    max: 1,
	speed: 400,
	axis: "x",
});


ScrollReveal({distance: '50px', duration: 1500});

//little scroll down button at home
ScrollReveal().reveal('.scroll-down',{delay:100, origin: 'top'});
//hero card
ScrollReveal().reveal('.hero-section div',{delay:300, origin: 'left', duration: 1000, interval: 100});
//contact info in hero card
ScrollReveal().reveal('.v-wrapper .nav-items #navi',{delay:600, origin: 'top', interval: 250});
//about )all divs)
ScrollReveal().reveal('.about-section div',{delay:300, origin: 'left', duration: 1000, interval: 100});
//about bullet tasks
ScrollReveal().reveal('.about-card ul li',{delay:300, origin: 'left', duration: 1000, interval: 250});

//the name that writes in the hero card
new TypeIt("#name", { 
    lifeLike: false, 
    speed: 0 
})
    .type("H")
	.pause(161)
	.type("e")
	.pause(250)
	.type("l")
	.pause(250)
	.type("l")
	.pause(250)
	.type("o")
	.pause(250)
	.type("!")
	.pause(1520)
	.delete(1)
	.pause(150)
	.delete(5	, {instant: true})
	.pause(679)
	.type("I")
	.pause(216)
	.type("'")
	.pause(264)
	.type("m")
	.pause(270)
	.type(" ")
	.pause(175)
	.type("M")
	.pause(204)
	.type("J")
	.pause(256)
	.type(".")
	.go();