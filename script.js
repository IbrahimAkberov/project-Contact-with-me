document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.classList.add('active');
        });

        item.addEventListener('mouseout', function() {
            this.classList.remove('active');
        });
    });
    
});

