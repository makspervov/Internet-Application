function setCart() {
    var data = {};
    data.name = document.getElementById('loginname').value;
    data.surname = document.getElementById('login').value;
    data.age = document.getElementById('wiek').value;
    data.country = document.getElementById('panstwo').value;
    data.email = document.getElementById('e-mail').value;
    data.comment = document.getElementById('comment').value;
    localStorage.setItem(data.name, JSON.stringify(data));
  }
  
  function getCart() {
    var content = '',
      startTab = "<table>",
      startCol = "<tr>",
      startRow = "<td>",
      endRow = "</td>",
      endCol = "</tr>",
      endTab = "</table> <br>";
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i),
          keyValue = JSON.parse(localStorage.getItem(key));
        content += startTab + startCol + startRow + "Imie " + endRow + startRow + keyValue.name + endRow + endCol;
        content += startCol + startRow + "Nazwisko " + endRow + startRow + keyValue.surname + endRow + endCol;
        content += startCol + startRow + "Wiek " + endRow + startRow + keyValue.age + endRow + endCol;
        content += startCol + startRow + "Country " + endRow + startRow + keyValue.country + endRow + endCol + endTab;
        content += startCol + startRow + "E-mail " + endRow + startRow + keyValue.email + endRow + endCol + endTab;
        content += startCol + startRow + "comment " + endRow + startRow + keyValue.comment + endRow + endCol + endTab;
    
      }
  
    document.getElementById("cart").innerHTML = content;
  
  }
  
  function deleteCart() {
  
    localStorage.clear();
  
  }