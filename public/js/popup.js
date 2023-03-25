const deleteButtons = document.querySelectorAll(".del-btn");
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", (event) => {
    event.preventDefault();
    const blog_id = event.target.getAttribute("data-blogId");

    document
      .querySelector(".btn-ok")
      .addEventListener("click", async (event) => {
        event.preventDefault();
        const response = await fetch(`/blog/${blog_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          document.location.replace("/api/blog/dashboard");
        } else {
          alert("Failed To Delete.");
        }
      });
  });
}

const updateButton = document.querySelectorAll(".edit-btn");
for (let i = 0; i < updateButton.length; i++) {
  updateButton[i].addEventListener("click", (event) => {
    event.preventDefault();
    const event_id = event.target.getAttribute("data-blogId");

    //make the fields editable
    document.querySelector(".title");
  });
}
