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
    if (!title) {
      titleEl.className = "form-control red-border";
      titleEl.addEventListener("input", () => {
        if (titleEl.value !== "") {
          titleEl.classList.remove("red-border");
        }
      });
    }
    if (!content) {
      contentEl.className = "form-control red-border";
      contentEl.addEventListener("input", () => {
        if (contentEl.value !== "") {
          contentEl.classList.remove("red-border");
        }
      });
    }
  }
};
document
  .querySelector(".post-button")
  .addEventListener("click", postFormHandler);
