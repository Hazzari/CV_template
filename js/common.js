/* User Script */

// Button scroll to top
const btnScrollTop = document.querySelector('.button-top');
btnScrollTop.addEventListener('click', function(e) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    if (pageYOffset > 500) {
        btnScrollTop.classList.add('button-top-show');
    } else {
        btnScrollTop.classList.remove('button-top-show');
    }
});

// Smooth menu scrolling to anchors
const anchors = document.querySelectorAll('a[data-link*="#"]')
    .forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('h3' + anchor.getAttribute('data-link'))
                .scrollIntoView({block: "center", behavior: "smooth"});
        });
});

// Close menu after clicked link
const hiddenMenuLinks = document.querySelectorAll('.hidden-menu a')
    .forEach(function(item) {
        item.addEventListener('click', function(e) {
            document.getElementById('hmt').checked = false;
        });
});

// Animation profile status in status bar
const animationStatus = document.querySelector('.sidebar__status')
    .addEventListener('click', function() {
        const statusBar = document.querySelector('.footer__item-green'),
            timer = setInterval(function() {
                statusBar.style.opacity = statusBar.style.opacity == 0 ? 1 : 0;
            }, 250);
        setTimeout(function() {
            clearInterval(timer);
            statusBar.style.opacity = 1;
        }, 3000);
});