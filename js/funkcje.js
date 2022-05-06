function raty() {
    var k = parseFloat(document.getElementById('kwota_pozyczki').value);
    var n = parseInt(document.getElementById('liczba_rat').value);
    var pr = parseFloat(document.getElementById('oprocentowanie_roczne').value);
    var pr_mc = (pr*0.01) / 12;
    var rata_mc = (k*pr_mc)/(1-(1/(Math.pow((1 + pr_mc),n))));
    var kwota = rata_mc * n;

    if(isNaN(kwota)) {
      alert('Jest wpisana niepoprawna wartość!!!');
    }
    
    else {
      document.getElementById('oprocentowanie_miesieczne').value = rata_mc.toFixed(2);
      document.getElementById('odsetki').value = kwota.toFixed(2);
    }
  }
  