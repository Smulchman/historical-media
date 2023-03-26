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

const animateWrongFields = (emailEl) => {
  emailEl.classList.add("red-border", "shake-animation");
  setTimeout(() => {
    emailEl.classList.remove("shake-animation");
  }, 500);
  emailEl.addEventListener("input", () => {
    if (emailEl.value !== "") {
      emailEl.classList.remove("red-border", "shake-animation");
    }
  });
};
