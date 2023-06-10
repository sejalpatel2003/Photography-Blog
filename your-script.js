document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var termsCheckbox = document.getElementById('termsCheckbox').checked;
  
    // Perform form validation
    if (!name || !email || !password || !confirmPassword || !termsCheckbox) {
      alert('Please fill in all the required fields.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
     // Show a success message or redirect to the login page
     alert('Registration successful. You will be redirected to the login page.');
     window.location.href = 'login.html'; // Redirect to the login page
   });
  
    // // Store registration details in localStorage
    // var userDetails = {
    //   name: name,
    //   email: email,
    //   password: password
    // };
  
    // localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Reset the form
    // document.getElementById('registrationForm').reset();
  
