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
      alert("Failed to log in.");
    }
  } else {
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
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
