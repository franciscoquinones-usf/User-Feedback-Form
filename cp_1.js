// Step 3

const feedbackForm = document.getElementById("feedbackForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const textCounter = document.getElementById("character-count");

commentsInput.addEventListener("input", () => {
    textCounter.textContent = "Characters: " + commentsInput.value.length;
});