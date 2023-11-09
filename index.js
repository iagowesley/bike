const toggle = document.getElementById('toggle');
    const menu = document.querySelector('.menu ul');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });