document.getElementById("myForm").addEventListener("submit", function (e) {
     e.preventDefault();

     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;

     let isValid = true;

     document.getElementById("nameError").style.display = "none";
     document.getElementById("emailError").style.display = "none";

     if (name.trim() === "") {
          document.getElementById("nameError").innerText =
               "Please enter your name";
          document.getElementById("nameError").style.display = "block";
          isValid = false;
     }

     const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
     if (email.trim() === "") {
          document.getElementById("emailError").innerText =
               "Please enter your email";
          document.getElementById("emailError").style.display = "block";
          isValid = false;
     } else if (!emailPattern.test(email)) {
          document.getElementById("emailError").innerText =
               "Please enter a valid email address";
          document.getElementById("emailError").style.display = "block";
          isValid = false;
     }

     if (isValid) {
          alert("Form submitted successfully!");
     }
});
