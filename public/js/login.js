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
