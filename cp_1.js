const form = document.getElementById("feedback_form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char_count");

// Counts the characters in real time
comments.addEventListener("input", () => {
  charCount.textContent = `Characters: ${comments.value.length}`;
});