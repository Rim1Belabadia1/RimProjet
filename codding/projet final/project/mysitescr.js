
document.getElementById("btnsc").addEventListener("click", function() {
  var element = document.getElementById("divdiv");
  var elementPosition = element.offsetTop;
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth"
  });
});

 
 
 var submit = document.getElementById('Submit');
  submit.addEventListener('click',verifyForm);

 
  function verifyForm() {// Get the form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var passwordVerification = document.getElementById('passwordVerification').value;
    
  
    // Define regular expressions for validation
    var emailRegex = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    var usernameRegex = /^[a-z0-9_-]{3,16}$/;

    var Erorrfound = false;
  
    // Validate the form values
    if (!emailRegex.test(email)) {
      document.getElementById('erroremail').textContent = 'Please enter a valid email address';
      document.getElementById('erroremail').style.display = 'block';
      Erorrfound = true;
       document.getElementById('email').classList.add("is-invalid");
    }
    if (Erorrfound == false){
        document.getElementById('email').classList.remove("is-invalid");
        document.getElementById('erroremail').textContent = '';
    }
    if (!usernameRegex.test(username)) {
      document.getElementById('erroruser').textContent = 'Please enter a valid username';
      document.getElementById('erroruser').style.display = 'block'; 
      Erorrfound = true;
      document.getElementById('username').classList.add("is-invalid");
      
    }
    if (Erorrfound == false){
        document.getElementById('username').classList.remove("is-invalid");
        document.getElementById('erroruser').textContent = '';
    }
    if (!passwordRegex.test(password)) {
      document.getElementById('errorpassword').textContent =
        'Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, and one digit';
      document.getElementById('errorpassword').style.display = 'block';
      Erorrfound = true;
      document.getElementById('password').classList.add("is-invalid");
      
    }
    if (Erorrfound == false){
        document.getElementById('password').classList.remove("is-invalid");
    }
    if (password !== passwordVerification) {
        document.getElementById('errorpasswordv').textContent = 'Passwords do not match';
        document.getElementById('errorpasswordv').style.display = 'block';
        Erorrfound = true;
        document.getElementById('passwordVerification').classList.add("is-invalid");
      }
      if (Erorrfound == false){
        document.getElementById('passwordVerification').classList.remove("is-invalid");
    }
  
    // Form values are valid, submit the form and redirect to another HTML file
    if(Erorrfound == false){
      window.location.replace("file:///C:/Users/RIM/Desktop/codding/project/site2.html");


    }
  

  }
    