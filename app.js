function addItemtoTable(tableID, id, credit, grade) {
  let newid = document.getElementById(id).value;
  let newCredit = Number(document.getElementById(credit).value);
  let newGrade = Number(document.getElementById(grade).value);
  if (!isNaN(newCredit) && newCredit >= 0) {
    addRow(document.getElementById(tableID), newid, newCredit, newGrade);
  } else alert("invalid credit input");
}
function addRow(table, id, credit, grade) {
  let tbody = table.getElementsByTagName("tbody")[0];
  let newRow = tbody.insertRow();
  newRow.innerHTML =
    ' <tr><td> <div class="form-check form-switch">  <input class="form-check-input" type="checkbox"id="switch" role="switch"  checked></div></td>' +
    '  <td colspan="3">' +
    (id == "" ? "unnamed" : id) +
    "</>   <td>" +
    credit +
    "</td>   <td>" +
    grade +
    "</td>  " +
    '<td><button type="button" class="btn btn-danger" onclick="delRow(this)">delete</button></td>' +
    "</tr> ";

  GPADisplay();
}
function delRow(o) {
  let row = o.parentNode.parentNode;
  row.parentNode.removeChild(row);
  GPADisplay();
}
function GPACal() {
  let sumGrade = 0;
  let sumCredit = 0;
  table = document.getElementById("subjectTable");
  for (let r = 1; r < table.rows.length; r++) {
    if (isChecked(table.rows[r].cells[0])) {
      let credit = Number(table.rows[r].cells[2].innerHTML);
      let grade = Number(table.rows[r].cells[3].innerHTML);
      sumCredit += credit;
      sumGrade += credit * grade;
    }
  }
  return sumCredit == 0 ? 0 : sumGrade / sumCredit;
}

function GPADisplay() {
  document.getElementById("GPA").innerHTML =
    "Your GPA : " + GPACal().toFixed(2);
}

function isChecked(cells) {
  return cells.children[0].children[0].checked;
}
document
  .getElementById("subjectTable")
  .addEventListener("change", function () {
    GPADisplay();
  });
