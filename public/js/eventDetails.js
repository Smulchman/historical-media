const blogButtons = document.querySelector(".blog");
blogButtons.addEventListener("click", (event) => {
  event.preventDefault();
  const event_id = event.target.getAttribute("data-eventId");
  document.location.replace(`/blog/${event_id}`);
});
