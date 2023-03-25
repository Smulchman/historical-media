//import { animateEmptyFields } from "../utils/helpers";

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("Connected");

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
      alert("Failed to sign up.");
    }
  } else {
    if (!username) {
      usernameEl.classList.add("red-border", "shake-animation");
      timeoutID = setTimeout(() => {
        usernameEl.classList.remove("shake-animation");
      }, 500);
      usernameEl.addEventListener("input", () => {
        if (usernameEl.value !== "") {
          usernameEl.classList.remove("red-border", "shake-animation");
        }
      });
    }
    if (!email) {
      emailEl.classList.add("red-border", "shake-animation");
      timeoutID = setTimeout(() => {
        emailEl.classList.remove("shake-animation");
      }, 500);
      emailEl.addEventListener("input", () => {
        if (emailEl.value !== "") {
          emailEl.classList.remove("red-border", "shake-animation");
        }
      });
    }
    if (!password) {
      passwordEl.classList.add("red-border", "shake-animation");
      timeoutID = setTimeout(() => {
        passwordEl.classList.remove("shake-animation");
      }, 500);
      passwordEl.addEventListener("input", () => {
        if (passwordEl.value !== "") {
          passwordEl.classList.remove("red-border", "shake-animation");
        }
      });
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
