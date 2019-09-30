function myFunction() {
    var x = document.getElementById("TopNav");
    if (x.className === "navBar") {
      x.className += " responsive"
    } else {
      x.className = "navBar";
    }
  }