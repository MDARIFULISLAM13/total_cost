
function loadTableData() {

    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];

    const tableBody = document.querySelector('#Details tbody');


    tableBody.innerHTML = '';

    rows.forEach(row => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${row.col1}</td>
            <td>${row.col2}</td>
            <td>${row.col3}</td>
        `;
        tableBody.appendChild(newRow);
    });
}


window.onload = loadTableData;

document.getElementById('update').addEventListener('click', function () {
    window.location.href = 'update.html';
})


function loadTableData() {
    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];

    const tableBody = document.querySelector('#Details tbody');
    tableBody.innerHTML = '';

    let totalAmount = 0;

    rows.forEach(row => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${row.col1}</td>
            <td>${row.col2}</td>
            <td>${row.col3}</td>
        `;
        tableBody.appendChild(newRow);

        totalAmount += parseFloat(row.col2) || 0;
    });

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="2">Total</td>
        <td>${totalAmount.toFixed(2)}</td>
    `;
    tableBody.appendChild(totalRow);
}
