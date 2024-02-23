const btnPassword = document.getElementById("btnPassword");
const btnConfirmPassword = document.getElementById("btnConfirmPassword");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const output = document.querySelector(".output");
const field = document.querySelector(".fieldMargin");
const alert = document.createElement("p");
const submit = document.getElementById("submitBtn");

btnPassword.addEventListener("click", changeIcon);
btnConfirmPassword.addEventListener("click", changeIcon);
submit.addEventListener("click", checkPasswords);

function message(text) {
  alert.textContent = text;
  alert.style.color = "red";
  alert.style.margin = "0";
  field.style.marginTop = "20px";
  password.style.borderColor = "red";
  confirmPassword.style.borderColor = "red";
  output.appendChild(alert);
}
function clearMessage() {
  password.style.borderColor = "";
  confirmPassword.style.borderColor = "";
  alert.textContent = "";
  field.style.marginTop = "0px";
  output.textContent = "";
}

function checkPasswords(event) {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    message("Passwords do not match");
  } else if (password.value === "" && confirmPassword.value === "") {
    message("These fields are required");
  }else if (password.value === confirmPassword.value) {
    clearMessage();
    submitForm();
  }
}

function changeIcon(event) {
  event.preventDefault();

  const iconOff = document.querySelector(".icon-tabler-eye-off");
  const icon = document.querySelector(".icon-tabler-eye");
  const confirmIconOff = document.querySelector(".confirmPasswordIconOff");
  const confirmIcon = document.querySelector(".confirmPasswordIcon");

  if (password.type === "password" || confirmPassword.type === "password") {
    password.type = "text";
    confirmPassword.type = "text";
    iconOff.style.display = "none";
    confirmIconOff.style.display = "none";
    icon.style.display = "inline";
    confirmIcon.style.display = "inline";
  } else {
    password.type = "password";
    confirmPassword.type = "password";
    iconOff.style.display = "inline";
    confirmIconOff.style.display = "inline";
    icon.style.display = "none";
    confirmIcon.style.display = "none";
  }
}
