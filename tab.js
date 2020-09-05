function openCity(evt, cityName,css ="w3-red") {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(css, "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += css;
}
