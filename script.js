function submitContactForm() {
    // Perform form validation here if needed
  
    // Serialize form data
    var formData = new FormData(document.getElementById("contact_form"));
  
    // Send form data asynchronously
    fetch("contact_form.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        showPopup();
      } else {
        alert("Failed to send email. Please try again later.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
  }
  window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backToTopBtn');
    if (window.scrollY > 100) { // Adjust 100 to the desired scroll position where the button should appear
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
    