document.addEventListener('DOMContentLoaded', function () {
    const categoryList = document.getElementById('category-list');
    const categoryForm = document.getElementById('category-form');

    categoryForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get values from the form
        const categoryName = document.getElementById('categoryName').value;
        const budget = document.getElementById('budget').value;

        // Create a new category item with Bootstrap styles
        const categoryItem = document.createElement('li');
        categoryItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        categoryItem.innerHTML = `
            <span>${categoryName}</span>
            <span class="badge badge-primary badge-pill">$${budget}</span>
        `;

        // Append the new category to the list
        categoryList.appendChild(categoryItem);

        // Clear the form
        categoryForm.reset();
    });
});

function addTransaction() {
    // Get values from the form
    const transactionName = document.getElementById('transactionName').value;
    const transactionCost = document.getElementById('transactionCost').value;

    // Create a new list item
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `${transactionName} - $${transactionCost}`;

    // Append the new transaction to the list
    document.getElementById('transaction-list').appendChild(transactionItem);

    // Clear the form
    document.getElementById('transaction-form').reset();
}