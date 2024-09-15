document.getElementById('addRowBtn').addEventListener('click', function () {
    const col1Value = document.getElementById('col1Input').value;
    const col2Value = document.getElementById('col2Input').value;
    const col3Value = document.getElementById('col3Input').value;
    const newRow = {
        col1: col1Value,
        col2: col2Value,
        col3: col3Value
    };

    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];
    rows.push(newRow);
    localStorage.setItem('tableRows', JSON.stringify(rows));

    document.getElementById('col1Input').value = '';
    document.getElementById('col2Input').value = '';
    document.getElementById('col3Input').value = '';

    displayRows();
});

function displayRows() {
    const rowsContainer = document.getElementById('rows-container');
    rowsContainer.innerHTML = '';

    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];

    rows.forEach((row, index) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row-item';
        rowDiv.innerHTML = `
            <span>${row.col1}</span>
            <span>${row.col2}</span>
            <span>${row.col3}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        rowsContainer.appendChild(rowDiv);
    });
}

document.getElementById('rows-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const index = event.target.getAttribute('data-index');
        const pin = prompt('Enter PIN to delete this row:');
        if (pin === 'arif341a') {
            deleteRow(index);
        } else {
            alert('Incorrect PIN. Row not deleted.');
        }
    }
});

function deleteRow(index) {
    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];

    rows.splice(index, 1);

    localStorage.setItem('tableRows', JSON.stringify(rows));

    displayRows();
}
document.getElementById('main').addEventListener('click', function () {
    window.location.href = 'main.html';
})
window.onload = displayRows;
