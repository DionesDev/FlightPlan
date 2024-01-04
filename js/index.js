/// LIST FOR CHECKING FORM CORRECT INPUTS.
// const checkListItemOne = [];


document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger-menu');
  const navList = document.querySelector('nav ul');

  burgerMenu.addEventListener('click', function () {
      navList.classList.toggle('show');
  });

  document.getElementById('imageLink').addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
  });
    // Add event listeners to each navigation item
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Hide the navigation list when an item is clicked
            navList.classList.remove('show');
        });
    });
});
