// the blog button will send the user to the blog page if loggedIn
const blogButtons = document.querySelectorAll(".blog");
for (let i = 0; i < blogButtons.length; i++) {
  blogButtons[i].addEventListener("click", (event) => {
    event.preventDefault();
    const event_id = event.target.getAttribute("data-eventId");
    document.location.replace(`/blog/${event_id}`);
  });
}
