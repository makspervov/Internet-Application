function raty (){
    var tab = document.getElementsByName("operator");
    var op;
    for(let i = 0; i < tab.length; i++){
        if(tab[i].checked) op = tab[i].value;
    } 
}