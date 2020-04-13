const formUI = document.querySelector("form");
const firstNameUI = document.getElementById("firstName");
const lastNameUI = document.getElementById("lastName");
const emailUI = document.getElementById("email");
const passwordUI = document.getElementById("password");

formUI.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstNameUI.value === "") {
    firstNameUI.parentElement.classList.add("error");
  }

  if (lastNameUI.value === "") {
    lastNameUI.parentElement.classList.add("error");
  }

  if (emailUI.value === "") {
    emailUI.placeholder = "email@example/com";
    emailUI.parentElement.classList.add("error");
  }

  if (passwordUI.value === "") {
    passwordUI.parentElement.classList.add("error");
  }
});
