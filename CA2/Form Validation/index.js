const form = document.getElementById("form");

const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    alert("Username cannot be blank")
  } else if(usernameValue.length < 6){
    alert("Username must have at least 6 character")
  }else {
    setSuccessFor(username);
  }


  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (passwordValue === "") {
   alert("Password cannot be blank");
  } else if(passwordValue.length < 5){
    alert("Password must have at least 5 character")
  } else if(!regularExpression.test(passwordValue)){
    alert("Password must have special Character, alphabet and digit")
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password check cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Entered password does not match");
  } else {
    setSuccessFor(password2);
  }

  const btn = document.querySelector("button");
  btn.innerHTML = "Validated Successfully  ✔";
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; 
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

