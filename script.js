
// Function to toggle back-to-top button visibility
window.addEventListener('scroll', function() {
  var backToTopButton = document.getElementById('backToTopBtn');
  if (window.scrollY > 100) {
      backToTopButton.classList.remove('hidden');
  } else {
      backToTopButton.classList.add('hidden');
  }
});

// Function to scroll smoothly to the top
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Function to toggle display of hidden text
function revealText(answerId) {
  var hiddenText = document.getElementById(answerId);
  if (hiddenText) {
      hiddenText.style.display = hiddenText.style.display === "none" ? "block" : "none";
  } else {
      console.error("Hidden text element with ID '" + answerId + "' not found.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Event listener for form submission
  document.getElementById("question-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the value of the submitted question
      var question = document.getElementById("question").value;

      // Log the value of the question variable to the console
      console.log("Submitted question:", question);

      // Create a new paragraph element to display the question
      var newQuestionElement = document.createElement("p");
      newQuestionElement.textContent = question;

      // Append the new question element to the "new-question" section
      document.getElementById("new-question").appendChild(newQuestionElement);

      // Clear the text area after submitting the question
      document.getElementById("question").value = "";
  });
});
