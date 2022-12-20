window.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-bars'),
          navigation = document.querySelector('.navbar-nav'),
          navItems = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function(){
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        })
    })
})