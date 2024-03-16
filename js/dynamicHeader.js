

console.log(document.getElementById('navbar'));
//change the color of the header when reaching a certain point of the website
function updateStyles() {
    if (window.scrollY > 20) {
        document.getElementById('navbar').classList.add("is-glass");
        document.getElementById('navbar').style.padding = '1em';

        if (window.innerWidth >= 1090) {
            document.getElementById('navbar').style.margin = '1em 18em';
            console.log("on PC");
        } else {
            document.getElementById('navbar').style.margin = '1em';
            console.log("on phone");
        }

    } else {
        document.getElementById('navbar').classList.remove("is-glass");
        document.getElementById('navbar').style.margin = '1em';

        if (window.innerWidth >= 910) {
            document.getElementById('navbar').style.padding = '1em 3em';
        } else {
            document.getElementById('navbar').style.padding = '1em';
        }

    }
}

// Add event listener for scroll
document.addEventListener('scroll', updateStyles);

// Add event listener for window resize
window.addEventListener('resize', updateStyles);

// Initial check
updateStyles();