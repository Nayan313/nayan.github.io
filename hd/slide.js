const indikatoren = document.getElementsByClassName("indikator");
indikatoren[0].classList.add("aktiv");

const slides = document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");

var aktuellerIndex = 0;

function umschalten(anzahl) {
    var neuerIndex = aktuellerIndex + anzahl;

    if(neuerIndex < 0) {
        neuerIndex = slides.length -1;
    }

    if(neuerIndex > slides.length -1) {
        neuerIndex = 0;
    }

    springeZuEintrag(neuerIndex);
}

function springeZuEintrag(neuerIndex) {
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    indikatoren[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
}

function search() {
    let filter = document.getElementById('.search').value.toUpperCase();

    let item = document.querySelectorAll('.card');
    
    let l = document.getElementsByTagName('h4');
    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByTagName('h4')[0];

        let value=a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
            
        } 
    };
}
