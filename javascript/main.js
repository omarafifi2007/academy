let BTN = document.querySelector(".Hello");

window.onscroll = function ()
{
    if (window.scrollY >= 600)
    {
        BTN.style.display = "block";
    }
    else
    {
        BTN.style.display = "none";
    }
    };
    BTN.onclick = function ()
    {
    window.scrollTo
    ({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

ScrollReveal
({
    distance: '80px',
    duration: 1500,
    delay: 50,
});
ScrollReveal().reveal('.navbar, .H1, .H2', {origin: 'top'});
ScrollReveal().reveal('.H3', {origin: 'bottom'});
const typed = new Typed('.drt2', {
    strings: ['أكاديمية قرآن اونلاين لتحفيظ القرآن الكريم'],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 1000,
    loop: false,

});

function myFunction() {
    location.reload();
};
