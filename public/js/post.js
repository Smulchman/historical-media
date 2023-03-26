//import { animateEmptyFields } from "../utils/helpers";
const animateEmptyFields = (email, emailEl) => {
  if (!email) {
    emailEl.classList.add("red-border", "shake-animation");
    setTimeout(() => {
      emailEl.classList.remove("shake-animation");
    }, 500);
    emailEl.addEventListener("input", () => {
      if (emailEl.value !== "") {
        emailEl.classList.remove("red-border", "shake-animation");
      }
    });
  }
};

//clicking the post button will post a blog
const postFormHandler = async (event) => {
  event.preventDefault();

  const titleEl = document.querySelector("#new-blog-title");
  const contentEl = document.querySelector("#new-description");

  const title = document.querySelector("#new-blog-title").value.trim();
  const content = document.querySelector("#new-description").value.trim();

  if (title && content) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/blog/dashboard");
    } else {
      alert("Failed to post new blog.");
    }
  } else {
    animateEmptyFields(title, titleEl);
    animateEmptyFields(content, contentEl);
  }
};
document
  .querySelector(".post-button")
  .addEventListener("click", postFormHandler);

const eventTitle = document.querySelector(".event-title");
eventTitle.addEventListener("click", (event) => {
  event.preventDefault();
  const event_id = event.target.getAttribute("data-eventId");
  document.location.replace(`/event/${event_id}`);
});
