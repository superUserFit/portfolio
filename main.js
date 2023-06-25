// Hide navigation background when scrolled
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("bg-black", window.scrollY > 0)
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < (windowHeight - revealPoint)){
            reveals[i].classList.add('active');
        }else {
            reveals[i].classList.remove('active');
        }
    }
}