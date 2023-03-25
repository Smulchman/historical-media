document.querySelector("#home").addEventListener("click", () => {
  document.location.replace("/");
});

const blogButtons = document.querySelectorAll(".blog");
for (let i = 0; i < blogButtons.length; i++) {
  blogButtons[i].addEventListener("click", (event) => {
    const event_id = event.target.getAttribute("data-eventId");
    document.location.replace(`/blog/${event_id}`);
  });
}

document.querySelector("#dashboard").addEventListener("click", () => {
  document.location.replace("/api/blog/dashboard");
});

document.querySelector("#events-page").addEventListener("click", () => {
  console.log("sent");
  document.location.replace("/all-events");
});
