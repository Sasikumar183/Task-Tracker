const text = document.getElementById('action');
const listContainer = document.getElementById('task');

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        fun();
    }
});
function fun() {
    let val = text.value;
    if (val === '') {
        alert("Fill the task");
    } else {
        let listItem = document.createElement("li");

        // Create "Done" button
        let doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.onclick = function () {
            // Toggle the 'done' class on the task
            listItem.classList.toggle('done');
        };

        // Create "Remove" button
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            // Your logic for removing the task
            listContainer.removeChild(listItem);
        };

        // Set the task text
        listItem.textContent = val;

        // Append buttons to the list
        listItem.appendChild(doneButton);
        listItem.appendChild(removeButton);
        listContainer.appendChild(listItem);
        doneButton.id="btnid";
        removeButton.id="rmid";
    }


    text.value = ''; // Clear the input field after adding a task
    
}