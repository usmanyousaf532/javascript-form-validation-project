function clearErrors() {
  error = document.getElementsByClassName("formerror");
  for (let item of error) {
    item.innerHTML = "";
  }
}

function setErrors(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;

  clearErrors();

  var name = document.forms["myForm"]["fname"].value;

  if (name.length < 5) {
    setErrors("name", "*Length of name is to short");
    returnval = false;
  }
  if (name.length === 0) {
    setErrors("name", "*Name does not enmpty");
    returnval = false;
  }
  if (name.length >= 5) {
    setErrors("name", "");
    // document
    //   .getElementById("name")
    //   .getElementsByClassName("formerror")[0].innerHTML = "";
  }

  var email = document.forms["myForm"]["femail"].value;

  if (email.length > 50) {
    setErrors("email", "*Email length is too Long");
    returnval = false;
  }

  if (email.length <= 50) {
    document
      .getElementById("email")
      .getElementsByClassName("formerror")[0].innerHTML = "";
  }

  var phone = document.forms["myForm"]["fphone"].value;

  if (phone.length != 12) {
    setErrors("phone", "*Phone number must be 12 digits");
    returnval = false;
  }

  if (phone.length === 12) {
    document
      .getElementById("phone")
      .getElementsByClassName("formerror")[0].innerHTML = "";
  }

  var password = document.forms["myForm"]["fpass"].value;

  if (password.length < 6 || password.length > 10) {
    setErrors("pass", "*Password should be atleast 6 characters long");
    returnval = false;
  }

  if (password.length >= 6) {
    document
      .getElementById("pass")
      .getElementsByClassName("formerror")[0].innerHTML = "";
  }

  var confirmPassword = document.forms["myForm"]["fcpass"].value;

  if (confirmPassword != password) {
    setErrors("cpass", "*Password and confirm password does not match");
    returnval = false;
  }

  if (confirmPassword === password) {
    document
      .getElementById("pass")
      .getElementsByClassName("formerror")[0].innerHTML = "";
  }

  return returnval;
}
document.getElementById("clearBtn").addEventListener("click", () => {
  document.forms["myForm"].reset();
  // clearErrors();
});
