// function myFunction() {
//     var x = document.getElementById("nav-list");
//     var y = document.getElementById("navbar");

//     if (x.className === "nav-list" ) {
//       x.className += " responsive";
//     } 
//     else if( y.className === "navbar"){
//         y.className += " responsive";
//     }else {
//       x.className = "nav-list";
//       y.className = "navbar";
//     }
//   }

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger-menu');
  const navList = document.querySelector('nav ul');

  burgerMenu.addEventListener('click', function () {
      navList.classList.toggle('show');
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