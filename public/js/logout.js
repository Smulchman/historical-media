const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
document.querySelector("#home").addEventListener("click", () => {
  document.location.replace("/");
});
document.querySelector("#dashboard").addEventListener("click", () => {
  document.location.replace("/api/blog/dashboard");
});

const blogButtons = document.querySelectorAll(".blog");

for (let i = 0; i < blogButtons.length; i++) {
  blogButtons[i].addEventListener("click", (event) => {
    const event_id = event.target.getAttribute("data-eventId");
    document.location.replace(`/blog/${event_id}`);
  });
}

document.querySelector("#events-page").addEventListener("click", () => {
  console.log("sent");
  document.location.replace("/all-events");
});
