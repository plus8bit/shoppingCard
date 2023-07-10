const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener('click', () => {
  console.log(inputFieldEl.value)
})