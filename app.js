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
    '</th>  <td colspan="3">' +
    (id == "" ? "unnamed" : id) +
    "</td>   <td>" +
    credit +
    "</td>   <td>" +
    grade +
    "</td>  </tr> ";
  GPADisplay();
}
function GPACal() {
  let sumGrade = 0;
  let sumCredit = 0;
  table = document.getElementById("subjectTable");
  for (let r = 1; r < table.rows.length; r++) {
    let credit = Number(table.rows[r].cells[2].innerHTML);
    let grade = Number(table.rows[r].cells[3].innerHTML);
    sumCredit += credit;
    sumGrade += credit * grade;
  }
  return sumCredit == 0 ? 0 : sumGrade / sumCredit;
}

function GPADisplay() {
  document.getElementById("GPA").innerHTML = "Your GPA : " + GPACal().toFixed(2);
}
