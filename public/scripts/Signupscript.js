Submit = () => {
    enterFirstName =  document.getElementById('infirstname');
    enterLastName =  document.getElementById('inlastname');
    enterEmail =  document.getElementById('inemail');
    enterPassword =  document.getElementById('inpassword');

    const user = {
   rfirstName : "admin",
   rlastName : "user",
   remail : "user@example.com",
   rpassword : "Admin1234",
    }

    if (enterFirstName.value == "") {
        document.getElementById('error1').innerHTML = "First Name cannot be empty"
        enterFirstName.style.background = 'url("./images/icon-error.svg") no-repeat right' 
    }
     if (enterLastName.value  == "") {
     document.getElementById('error2').innerHTML = "Last Name cannot be empty"
     enterLastName.style.background = 'url("./images/icon-error.svg") no-repeat right'
    }
    if (enterEmail.value  == "") {
     document.getElementById('error3').innerHTML = "looks like this is not an email"
     enterEmail.style.background = 'url("./images/icon-error.svg") no-repeat right'
    }
     if (enterPassword.value  == "") {
     document.getElementById('error4').innerHTML = "Password cannot be empty"
     enterPassword.style.background = 'url("./images/icon-error.svg") no-repeat right'
    }

    else if (
        enterFirstName.value == user.rfirstName
     && enterLastName.value == user.rlastName 
     && enterEmail.value == user.remail 
     && enterPassword.value == user.rpassword
     )
     {
        window.location.assign("../public/Main.html")
    }
    
 

}