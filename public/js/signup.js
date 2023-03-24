const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("Connected");

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
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
