document.querySelector("#login").addEventListener("click", () => {
  document.location.replace("/login");
});

document.querySelector("#signup").addEventListener("click", () => {
  document.location.replace("/sign-up");
});

document.querySelector("#home").addEventListener("click", () => {
  document.location.replace("/");
});

// document.querySelector("#blog").addEventListener("click", (event) => {
//   const event_id = event.target.dataset.eventId;
//   console.log(event_id);
//   document.location.replace(`/blog/${event_id}`);
// });
document.querySelector("#dashboard").addEventListener("click", () => {
  document.location.replace("/login");
});
