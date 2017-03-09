function filterFunction(n,m) {
    var input, filter, p, i;
    input = document.getElementById(n);
    filter = input.value.toUpperCase();
    div = document.getElementById(m);
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
function myFunction(n) {
    if(document.getElementById(n).style.display == "none"){
            document.getElementById(n).style.display = "block";
    }else{
            document.getElementById(n).style.display = "none";
    }
}
