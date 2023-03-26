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

const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-signup1");
  const emailEl = document.querySelector("#exampleInputEmail1");
  const passwordEl = document.querySelector("#exampleInputPassword1");

  const username = document.querySelector("#username-signup1").value.trim();
  const email = document.querySelector("#exampleInputEmail1").value.trim();
  const password = document
    .querySelector("#exampleInputPassword1")
    .value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      animateWrongFields(usernameEl);
      animateWrongFields(emailEl);
      animateWrongFields(passwordEl);
    }
  } else {
    animateEmptyFields(username, usernameEl);
    animateEmptyFields(email, emailEl);
    animateEmptyFields(password, passwordEl);
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
