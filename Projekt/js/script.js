/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function setCart() {
  var dane = {};
  dane.f_name = document.getElementById('first_name').value;
  dane.l_name = document.getElementById('last_name').value;
  dane.age = document.getElementById('age').value;
  dane.country = document.getElementById('country').value;
  dane.e_mail = document.getElementById('e-mail').value;
  dane.os = document.getElementById('os').value;
  dane.amount = document.getElementById('amount').value;
  dane.comment = document.getElementById('comment').value;
  localStorage.setItem(dane.e_mail, JSON.stringify(dane));
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
    var key = localStorage.key(i), keyValue = JSON.parse(localStorage.getItem(key))
    content += startTab + startCol + startRow + "First name: " + endRow + startRow + "Last name: " + endRow +
        startRow + "Country: " + endRow + startRow + "OS: " + endRow + startRow + "Amount: " + endRow +
        startRow + "Comment: " + endRow + endCol;

    content += startCol + startRow + keyValue.f_name + endRow + startRow + keyValue.l_name + endRow +
        startRow + keyValue.country + endRow + startRow + keyValue.os + endRow + startRow + keyValue.amount +
        endRow + startRow + keyValue.comment + endRow + endCol + endTab;
    }
    document.getElementById("cart").innerHTML = content;
}

function editCart() {
  var dane = {};
  dane.f_name = document.getElementById('first_name').value;
  dane.l_name = document.getElementById('last_name').value;
  dane.age = document.getElementById('age').value;
  dane.country = document.getElementById('country').value;
  dane.e_mail = document.getElementById('e-mail').value;
  dane.os = document.getElementById('os').value;
  dane.amount = document.getElementById('amount').value;
  dane.comment = document.getElementById('comment').value;
  localStorage.setItem(dane.e_mail, JSON.stringify(dane));
}

function deleteElement() {
  var temp = document.getElementById('e-mail').value;
  localStorage.removeItem(temp);
}

  function checkPattern() {
    var elem = document.getElementById("name");
    var re = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s-]+$/;

    return re.test(elem.value);
  }