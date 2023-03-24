document.querySelector("#login").addEventListener("click", () => {
  document.location.replace("/login");
});

document.querySelector("#signup").addEventListener("click", () => {
  document.location.replace("/sign-up");
});

document.querySelector("#home").addEventListener("click", () => {
  document.location.replace("/");
});

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
