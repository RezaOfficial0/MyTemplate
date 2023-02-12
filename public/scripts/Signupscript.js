Submit = () => {
    enterFirstName =  document.getElementById('infirstname');
    enterLastName =  document.getElementById('inlastname');
    enterEmail =  document.getElementById('inemail');
    enterPassword =  document.getElementById('inpassword');

   const rfirstName = "Admin";
   const rlastName = "User";
   const remail = "user@example.com";
   const Password = "Admin1234"

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

    else if (enterFirstName.value == "Admin"
     && enterLastName.value == "User" 
     && enterEmail.value == "user@example.com" 
     && enterPassword.value == "Admin1234")
     {
        window.location.assign("../Main.html")
    }
 

}