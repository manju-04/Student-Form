function saveform(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value.trim();

    // Get table body
    var table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    // Insert row content
    newRow.innerHTML = `
        <td class="p-1">${name}</td>
        <td class="p-1">${age}</td>
        <td class="p-1">${gender}</td>
        <td class="p-1">${course}</td>
        <td class="p-1">${email}</td>
        <td class="p-1">
            <button class="del bg-red-600 text-white rounded px-3 py-1 hover:bg-red-700">Delete</button>
        </td>
    `;

    // Delete button functionality
    var deleteBtn = newRow.querySelector(".del");
    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this record?")) {
            newRow.remove();
        }
    });

    // Reset the form
    event.target.reset();
}
