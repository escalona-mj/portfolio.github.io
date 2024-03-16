//change the color of the header when reaching a certain point of the website
function updateStyles() {
    var header = document.getElementById('navbar');
    if (window.scrollY > 20) {
        header.classList.add("is-glass");
        header.style.padding = '1em';

        if (window.innerWidth >= 1090) {
            header.style.margin = '1em 18em';
            console.log("on PC");
        } else {
            header.style.margin = '1em';
            console.log("on phone");
        }

    } else {
        header.classList.remove("is-glass");
        header.style.margin = '1em';

        if (window.innerWidth >= 910) {
            header.style.padding = '1em 3em';
        } else {
            header.style.padding = '1em';
        }

    }
}

// Add event listener for scroll
document.addEventListener('scroll', updateStyles);

// Add event listener for window resize
window.addEventListener('resize', updateStyles);

// Initial check
updateStyles();