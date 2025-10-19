const form = document.getElementById("feedback_form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const comments = document.getElementById("comments")
const charCount = document.getElementById("char_count")

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