document.querySelector("#login").addEventListener("click", () => {
  document.location.replace("/login");
});

document.querySelector("#signup").addEventListener("click", () => {
  document.location.replace("/sign-up");
});

document.querySelector("#events-page").addEventListener("click", () => {
  console.log("sent");
  document.location.replace("/all-events");
});
