//clicking the post button will post a blog
const postFormHandler = async (event) => {
  event.preventDefault();

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
  }
};
document
  .querySelector(".post-button")
  .addEventListener("click", postFormHandler);
