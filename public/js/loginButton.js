document.querySelector("#login").addEventListener("click", () => {
  document.location.replace("/login");
});

document.querySelector("#signup").addEventListener("click", () => {
  document.location.replace("/sign-up");
});

document.querySelector("#home").addEventListener("click", () => {
  document.location.replace("/");
});

<<<<<<< HEAD
=======
// document.querySelector("#blog").addEventListener("click", (event) => {
//   const event_id = event.target.dataset.eventId;
//   console.log(event_id);
//   document.location.replace(`/blog/${event_id}`);
// });
>>>>>>> 8e0f040b8c5be6711e4b8bf133f1e39be556c725
document.querySelector("#dashboard").addEventListener("click", () => {
  document.location.replace("/login");
});

const blogButtons = document.querySelectorAll(".blog");

for (let i = 0; i < blogButtons.length; i++) {
  blogButtons[i].addEventListener("click", (event) => {
    const event_id = event.target.getAttribute("data-eventId");
    document.location.replace(`/blog/${event_id}`);
  });
}
