// redirect to the root of the website
document.querySelector("#home").addEventListener("click", () => {
  document.location.replace("/");
});

// the dashboard header will send user to dashboard
document.querySelector("#dashboard").addEventListener("click", () => {
  document.location.replace("/api/blog/dashboard");
});

<<<<<<< HEAD
document.querySelector("#events-page").addEventListener("click", () => {
  console.log("sent");
  document.location.replace("/all-events");
});
=======
//view all button will send the user to a new page with all of today's events
const viewAll = document.querySelectorAll(".view-all");
for (let i = 0; i < viewAll.length; i++) {
  viewAll[i].addEventListener("click", () => {
    document.location.replace(`/all-events`);
  });
}
>>>>>>> 4f8b63afa97ee547ac9ef3c9730da2859ead682c
