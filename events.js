// Variables
const name_text = document.getElementById("name_text")
const name_submit = document.getElementById("name_submit")
const name_enter = document.getElementById("name_enter")

// Functions (Event Handler)
const newName = () => {
    name_text.innerHTML = name_enter.value;
}

// Event Listenter (linking the event to the function)
name_submit.addEventListener("click", newName)