function pokaz(id) {
    var tresc="";
    switch (id)  {
     case 2: tresc += pokazGalerie();break;
     case 3: tresc += pokazPost(); break;
     case 4: tresc += pokazKontakt();break;
     default: tresc += pokazO();
    }
    //pobierz element o wskazanym id i ustaw jego nową zawartość:
    document.getElementById('blok').innerHTML = tresc;
}
function pokazO() {
    var tresc ='<h2><br />Pierwsze kroki</h2> ';
    //operator += uzupełnia łańcuch kolejną porcją znaków:
    tresc += '<p>SPA (Single Page Application) to aplikacja lub strona internetowa, która w całości wczytuje się za jednym razem. Cały potrzebny do działania strony kod (HTML, CSS, JavaScript) przesyłany jest na początku lub dodawany dynamicznie w kawałkach, zwykle w odpowiedzi na interakcje generowane przez użytkownika</p>'+
    '<p class="srodek"><img src="miniaturki/baner.jpg" alt="Zdjęcie" /></p>'+
    '<article><h2>Wady SPA</h2>'+
    ' <p>Czas wytworzenia oraz nakład pracy włożony w stworzenie takiej aplikacji jest większy, co wiąże ze sobą dodatkowe koszta, dlatego tworzenie małych stron staje się nieopłacalne, gdyż efekt dla strony z jedną zakładką będzie praktycznie niezauważalny.</p><p>Pozycjonowanie stron tego typu wymaga również większego nakładu pracy. W obecnej chwili roboty indeksujące Google nie radzą sobie ze strona typu Single Page Application, co przyczynia się do tworzenia rozwiązań przystosowanych dla robotów.</p></article>';
    //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
    return tresc;
}
function pokazGalerie() {
    var tresc='<h2><br />Moja galeria</h2>';
    tresc+=' <div class="galeria">';
    //wygeneruj kod HTML z obrazami za pomocą pętli for:
    for(i=1;i<=10;i++) {
        tresc+='<div class="slajd"> <img src="miniaturki/obraz' + i + '.JPG" /></div>';
    }
    return tresc+'</div>';
}
function pokazKontakt() {
    var tresc='<h2><br />Kontakt</h2>';
    //uzupełnij treść:
    tresc+= '<table> <tr> <td>Telefon: </td>   <td>+48123456789</td> </tr> <tr>   <td>Email: </td>   <td>domain@example.com</td></tr><tr><td>Adres:</td><td>One Microsoft Way, Redmond, WA 98052, USA</td> </tr></table>'
    return tresc;
}

function pokazPost() {
    //funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
    //użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
    //zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
    tresc='<h2><br>Dodaj post</h2>';
    tresc+='<article class="srodek" > <form  action="mailto:s96523@pollub.edu.pl" method="post" onsubmit="return pokazDane();">'+ 'Twój email:<br> <input type="email" name="email" id="email" size="30" required pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  /><br>'+ 'Imię i Nazwisko: <br><input required id="nazwisko" type="text" size="30"><br>'+ 'Telefon: <br><input type="tel" id="telefon"name="tel_number"size="30" required " ><br>'+'<br><div id="zainteresowania"> Zainteresowania: <br> <input type="checkbox" name="zain" value="Sport" > Sport <input type="checkbox" name="zain" value="Muzyka" > Muzyka<input type="checkbox" name="zain" value="Film"> Film<input type="checkbox" name="zain" value="Inne" > Inne</div><div id="wiek"><br> Wiek: <br> <input type="radio" name="wie" value="Mniej 10" >Mniej 10<input type="radio" name="wie" value="10-20" >10-20 <input type="radio" name="wie" value="20-30" >20-30 <input type="radio" name="wie" value="30-40" >30-40 <input type="radio" name="wie" value="40-50">40-50<input type="radio" name="wie" value="Więcej niż 50" >Więcej niż 50</div>'+'Komentarz: <br><textarea cols="35" rows="5" id="wiadomosc" name="wiadomosc" ></textarea>'+ '<br> <input type="submit" name="wyslij" value="Wyślij" />'+ '</form></article>';
    return tresc;
}

function pokazDane() {
    //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
    //typu confirm do zatwierdzenia przez użytkownika:
    var dane="Następujące dane zostaną wysłane:\n";
    dane+="Email: "+document.getElementById('email').value+"\n";
    dane+="Imię i Nazwisko: "+document.getElementById('nazwisko').value+"\n";
    dane+="Telefon: "+document.getElementById('telefon').value+"\n";
    var checkboxes = document.getElementsByName('zain');
    var checkboxesChecked = [];
    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) 
        {
            checkboxesChecked.push(checkboxes[index].value);
        }
    }
    dane+="Zainteresowania: " + checkboxesChecked + "\n";
   
    var temp = document.getElementsByName('wie');
    for(var i = 0; i < temp.length; i++) {
        if(temp[i].checked){
            dane+="Wiek: "+ temp[i].value +"\n";
        }
    }
    dane+="Wiadomość: "+document.getElementById('wiadomosc').value+"\n";
    if (window.confirm(dane)) return true;
    else return false;
}
   