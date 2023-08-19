function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.classList.toggle('active'); // Toggle the 'active' class for the menu icon
    navLinks.classList.toggle('show');
    
}
