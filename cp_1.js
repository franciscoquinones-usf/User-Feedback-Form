// Step 3

const feedbackForm = document.getElementById("feedbackForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const textCounter = document.getElementById("character-count");
const feedbackDisplay = document.getElementById("feedback-display");

// Character Count
commentsInput.addEventListener("input", () => {
    textCounter.textContent = "Characters: " + commentsInput.value.length;
});

// Prevent empty submission

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!usernameInput.value || !emailInput.value || !commentsInput.value) {
        alert("Please fill out all fields");
        return;
    }

    const entry = document.createElement("div");
    entry.className = "feedback-entry";
    entry.innerHTML = `<p>Name: ${usernameInput.value}<p>
        <p>Email: ${emailInput.value}</p>
        <p>Comments: ${commentsInput.value}</p>`;

    feedbackDisplay.appendChild(entry);
})

