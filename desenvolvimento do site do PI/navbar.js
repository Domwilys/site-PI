window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    if(window.pageYOffset > 0){
        navbar.classList.add('nav2');
    }else {
        navbar.classList.remove('nav2');
    }
});

