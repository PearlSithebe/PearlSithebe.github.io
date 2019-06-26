function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }