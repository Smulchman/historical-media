//import { animateEmptyFields } from "../utils/helpers";
const animateEmptyFields = (email, emailEl) => {
  if (!email) {
    emailEl.classList.add("red-border", "shake-animation");
    setTimeout(() => {
      emailEl.classList.remove("shake-animation");
    }, 500);
    emailEl.addEventListener("input", () => {
      if (emailEl.value !== "") {
        emailEl.classList.remove("red-border", "shake-animation");
      }
    });
  }
};

const animateWrongFields = (emailEl) => {
  emailEl.classList.add("red-border", "shake-animation");
  setTimeout(() => {
    emailEl.classList.remove("shake-animation");
  }, 500);
  emailEl.addEventListener("input", () => {
    if (emailEl.value !== "") {
      emailEl.classList.remove("red-border", "shake-animation");
    }
  });
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const emailEl = document.querySelector("#exampleInputEmail1");
  const passwordEl = document.querySelector("#exampleInputPassword1");

  const email = document.querySelector("#exampleInputEmail1").value.trim();
  const password = document
    .querySelector("#exampleInputPassword1")
    .value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      animateWrongFields(emailEl);
      animateWrongFields(passwordEl);
    }
  } else {
    animateEmptyFields(email, emailEl);
    animateEmptyFields(password, passwordEl);
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
