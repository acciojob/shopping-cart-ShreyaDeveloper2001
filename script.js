//your code here
<script>
        document.addEventListener("DOMContentLoaded", function () {
            const itemNameInput = document.getElementById("item-name-input");
            const itemPriceInput = document.getElementById("item-price-input");
            const addButton = document.getElementById("add");
            const shoppingList = document.getElementById("shopping-list");
            const totalElement = document.getElementById("total");

            addButton.addEventListener("click", function () {
                const itemName = itemNameInput.value.trim();
                const itemPrice = parseFloat(itemPriceInput.value);
if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
                    alert("Invalid input. Please enter a valid item name and price.");
                    return;
                }

                const newRow = document.createElement("tr");
                const itemNameCell = document.createElement("td");
                const itemPriceCell = document.createElement("td");

                itemNameCell.textContent = itemName;
                itemPriceCell.textContent = itemPrice.toFixed(2);

                newRow.appendChild(itemNameCell);
                newRow.appendChild(itemPriceCell);
				shoppingList.insertBefore(newRow, totalElement.parentElement);

                // Clear input fields
                itemNameInput.value = "";
                itemPriceInput.value = "";

                // Update the total
                const currentTotal = parseFloat(totalElement.textContent);
                totalElement.textContent = (currentTotal + itemPrice).toFixed(2);
            });
        });
    </script>
