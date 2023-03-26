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

//user clicking the update button for a blog
const updateButton = document.querySelectorAll(".edit-btn");
for (let i = 0; i < updateButton.length; i++) {
  //user wants to edit
  let flip = 0;
  updateButton[i].addEventListener("click", async (event) => {
    event.preventDefault();
    const blog_id = event.target.getAttribute("data-blogId");

    //make the fields editable
    const title =
      updateButton[i].parentElement.parentElement.parentElement.querySelector(
        ".title"
      );
    const content =
      updateButton[i].parentElement.parentElement.parentElement.querySelector(
        ".content"
      );
    //show some indication that the user cna edit the fields
    title.setAttribute("contenteditable", "true");
    title.style.backgroundColor = "rgb(216, 224, 137)";
    content.setAttribute("contenteditable", "true");
    content.parentElement.style.backgroundColor = "rgb(216, 224, 137)";

    //change the color of the button and the text so user know what to press to post the update
    updateButton[i].textContent = "Post Blog";
    updateButton[i].style.backgroundColor = "rgb(216, 224, 137)";
    updateButton[i].style.color = "black";

    flip++;
    //user wants to post
    if (flip % 2 === 0) {
      //change the aesthetics of the fields back
      updateButton[i].textContent = "Edit Blog";
      updateButton[i].style.backgroundColor = "";
      updateButton[i].style.color = "";

      title.setAttribute("contenteditable", "false");
      title.style.backgroundColor = "";
      content.setAttribute("contenteditable", "false");
      content.parentElement.style.backgroundColor = "";

      //make the edit
      const response = await fetch(`${blog_id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: title.textContent,
          content: content.textContent,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        //document.location.replace("/api/blog/dashboard");
      } else {
        response.render("404");
      }
    }
  });
}
