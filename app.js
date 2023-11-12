function loadXMLDoc() {
    var userInput = encodeURIComponent(document.getElementById("name").value);
    //console.log(userInput);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML =
        this.responseText;
        console.log(userInput);
      }
    };
    
    xhttp.open("GET", "superheroes.php?query="+ userInput, true);
    xhttp.send();
  }

 
// function loadXMLDoc() {
//     var userInput =document.getElementById("name").ariaValueMax;
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//         // document.getElementById("result").innerHTML =
//         // this.responseText;
//         alert(this.responseText);
//         }
//     };

//     xhttp.open("GET", "superheroes.php", true);
//     xhttp.send();
// }