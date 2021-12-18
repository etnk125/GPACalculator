function addItemtoTable(tableID, id, credit, grade) {
  let newid = document.getElementById(id).value;
  let newCredit = Number(document.getElementById(credit).value);
  let newGrade = Number(document.getElementById(grade).value);
  if (!isNaN(newCredit) && newCredit >= 0)
    addRow(document.getElementById(tableID), newid, newCredit, newGrade);
  else alert("invalid credit input");
}
function addRow(table, id, credit, grade) {
  let tbody = table.getElementsByTagName("tbody")[0];
  let number = table.getElementsByTagName("tr").length;
  let newRow = tbody.insertRow();
  newRow.innerHTML =
    '  <tr> <th scope="row">' +
    number +
    '</th>  <td colspan="2">' +
    (id == "" ? "unnamed" : id) +
    "</td>   <td>" +
    credit +
    "</td>   <td>" +
    grade +
    "</td>  </tr> ";
}
