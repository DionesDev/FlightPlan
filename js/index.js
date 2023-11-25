function myFunction() {
    var x = document.getElementById("nav-list");
    var y = document.getElementById("navbar");

    if (x.className === "nav-list" ) {
      x.className += " responsive";
    } 
    else if( y.className === "navbar"){
        y.className += " responsive";
    }else {
      x.className = "nav-list";
      y.className = "navbar";
    }
  }