// document.getElementById('addRowBtn').addEventListener('click', addRow);

// function addRow() {
//     // Get values from the input fields
//     const col1Value = document.getElementById('col1Input').value;
//     const col2Value = document.getElementById('col2Input').value;
//     const col3Value = document.getElementById('col3Input').value;

//     // Get a reference to the table body
//     const tableBody = document.querySelector('#myTable tbody');

//     // Create a new row
//     const newRow = document.createElement('tr');

//     // Create and append cells to the new row with the input values
//     const cell1 = document.createElement('td');
//     cell1.textContent = col1Value;
//     newRow.appendChild(cell1);

//     const cell2 = document.createElement('td');
//     cell2.textContent = col2Value;
//     newRow.appendChild(cell2);

//     const cell3 = document.createElement('td');
//     cell3.textContent = col3Value;
//     newRow.appendChild(cell3);

//     // Append the new row to the table body
//     tableBody.appendChild(newRow);

//     // Clear the input fields after adding the row
//     document.getElementById('col1Input').value = '';
//     document.getElementById('col2Input').value = '';
//     document.getElementById('col3Input').value = '';
// }
document.getElementById('update').addEventListener('click', function () {
    window.location.href = 'update.html';
})
