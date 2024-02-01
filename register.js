const Email = document.querySelector("#EmailSignIn");
const Password = document.querySelector("#Password");
const SubmitButton = document.querySelector(".submitButton");
const RegisterEmail = document.querySelector("#RegisterEmail");
const RegisterPassword = document.querySelector("#RegisterPassword");
const RegisterButton = document.querySelector(".Registerbtn");

SubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem(
    "User",
    JSON.stringify({
      Email: Email.value,
      Password: Password.value,
    })
  );
  Email.value = "";
  Password.value = "";
});

RegisterButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem(
    "User",
    JSON.stringify({
      Email: RegisterEmail.value,
      Password: RegisterPassword.value,
    })
  );
  RegisterEmail.value = "";
  RegisterPassword.value = "";
});
