window.onload=function(){

    var searchBtn= document.querySelector('#search');
    var httpRequest;

    searchBtn.addEventListener("click",function(element){
        element.preventDefault();
        httpRequest = new XMLHttpRequest();
        var url = "superheroes.php";
        httpRequest.onreadystatechange = listheroes();
        httpRequest.open('GET', url);
        httpRequest.send();
    });

    function listheroes() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                var quote = document.querySelector("#quote");
                quote.innerHTML=response;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }

};