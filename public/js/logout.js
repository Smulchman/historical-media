const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
document.querySelector("#home").addEventListener("click", () => {
  document.location.replace("/");
});
document.querySelector("#dashboard").addEventListener("click", () => {
  document.location.replace("/api/blog/dashboard");
});

document.querySelector("#blog").addEventListener("click", () => {
  document.location.replace("/blog");
});
