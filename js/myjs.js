function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, p, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    p = div.getElementsByTagName("p");
    for (i = 0; i < p.length; i++) {
        if (p[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
        } else {
            p[i].style.display = "none";
        }
    }
}

function Botao(n) {
  var classes = document.getElementsByClassName("renan");
  var i, davez;
  for (i = 0; i < classes.length; i++){
    davez = classes[i];
    if (davez.style.display != "none"){
      document.getElementById(davez.id).style.display = "none";
    }
  }
    document.getElementById(n).style.display = "block";
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function filterFunction2() {
    var input, filter, ul, li, p, i;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown2");
    p = div.getElementsByTagName("p");
    for (i = 0; i < p.length; i++) {
        if (p[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
        } else {
            p[i].style.display = "none";
        }
    }
}
