const form = document.getElementById("feedback_form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const comments = document.getElementById("comments")
const charCount = document.getElementById("char_count")
const feedbackDisplay = document.getElementById("feedback_display")

// Counts the characters in real time
comments.addEventListener("input", () => {
  charCount.textContent = `Characters: ${comments.value.length}`
});

// Creating the tooltip for the mouse
const tooltip = document.createElement("div")
tooltip.className = "tooltip"
document.body.appendChild(tooltip)

// Text will be added when mouse hovers overs the textbox
form.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    tooltip.textContent = `Enter your ${e.target.name}`
    tooltip.style.display = "block"
        // Where the text is located next to the mouse
    tooltip.style.top = e.pageY + 10 + "px"
    tooltip.style.left = e.pageX + 10 + "px"}
});

// Text will disappear when the mouse moves out of the textbox
form.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    tooltip.style.display = "none"}
});

// Display for a completed form
form.addEventListener("submit", (e) => {
  e.preventDefault()

  // An alert is shown if all values arent filled in
  if (!username.value.trim() || !email.value.trim() || !comments.value.trim()) {
    alert("All fields need to be filled to be submitted")
    return}

  // The entered feedback being shown after clicking submit
  const entry = document.createElement("div")
  entry.classList.add("feedback_entry")
    // Adding the feed back into the HTML
  entry.innerHTML = `
    <p><strong>${username.value}</strong> (${email.value}) says:</p>
    <p>${comments.value}</p>
    <h2> Submitted Form </h2>`
  feedbackDisplay.appendChild(entry)

  // Clearing the fields once the the submit button has been clicked
  username.value = ""
  email.value = ""
  comments.value = ""
  charCount.textContent = "Characters: 0"
})

// Prevents background clicks from triggering form-related events
document.body.addEventListener("click", (e) => {
  console.log("The background has been clicked")
})

// Prevents from any events from bubbling 
form.addEventListener("click", (e) => {
  e.stopPropagation()
})