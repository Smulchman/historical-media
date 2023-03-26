// the blog button will send the user to the blog page if loggedIn
const blogButtons = document.querySelectorAll(".blog");
for (let i = 0; i < blogButtons.length; i++) {
  blogButtons[i].addEventListener("click", (event) => {
    event.preventDefault();
    const event_id = event.target.getAttribute("data-eventId");
    document.location.replace(`/blog/${event_id}`);
  });
}

const eventLinks = document.querySelectorAll(".event");
for (let i = 0; i < eventLinks.length; i++) {
  eventLinks[i].addEventListener("click", (event) => {
    event.preventDefault();
    const event_id = event.target.getAttribute("data-eventId");
    document.location.replace(`/event/${event_id}`);
  });
}

const eventTitle = document.querySelectorAll(".event-title");
for (let i = 0; i < eventTitle.length; i++) {
  eventTitle[i].addEventListener("click", (event) => {
    event.preventDefault();
    const event_id = event.target.getAttribute("data-eventId");
    document.location.replace(`/event/${event_id}`);
  });
}
