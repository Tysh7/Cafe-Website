function validate() { /* validating user submit information with validation*/
  var name = document.getElementById("name").value; /* represents name input*/ 
  var subject = document.getElementById("title").value;  /* reoresents title  input*/
  var phone = document.getElementById("phone").value;/* represents phone number input*/
  var email = document.getElementById("email").value;/* represents email input*/
  var message = document.getElementById("message").value;/* represents message input*/
  var error_message = document.getElementById("error_message");/* represents error message*/

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {  /*if the user enters characters less then 5 below happens*/
    text = "Invalid Full Name. Please try again"; /* appears when user enters the incorrrect values/ info*/
    error_message.innerHTML = text;
    return false; 
  }
  if (subject.length < 10) { /*if the user enters characters less then 10 below happens*/
    text = "Invalid Description. Please try again.";/* appears when user enters the incorrrect values/ info*/
    error_message.innerHTML = text;
    return false; /*if statement will keep operating until user enters the correct information*/
  }
  if (isNaN(phone) || phone.length != 10) { 
    text = "Invalid Phone Number. Please try again";/* appears when user enters the incorrrect values/ info*/
    error_message.innerHTML = text;
    return false;/*if statement will keep operating until user enters the correct information*/
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Invalid Email. Please try again.";/* appears when user enters the incorrrect values/ info*/
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 140) {
    text = "Invalid Descriptio. minimum( 140 charcters)";/* appears when user enters the incorrrect values/ info*/
    error_message.innerHTML = text;
    return false;/*if statement will keep operating until user enters the correct information*/
  }
  alert("Your Form Submitted Successfully!");
  return true; /*appears when user has enter the correct information */
}