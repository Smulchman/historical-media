module.exports = {
  isBefore: (created_at, updated_at) => {
    return !(created_at < updated_at);
  },
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  getRandElements: (list, len) => {
    const randList = [];
    for (let i = 0; i < len; i++) {
      if (list.length > 0) {
        const pos = Math.floor(Math.random() * list.length);
        randList.push(list[pos]);
        list.splice(pos, 1);
      }
    }
    return randList;
  },
  animateEmptyFields: (email, emailEl) => {
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
  },
  getDate: () => {
    return new Date().toLocaleDateString("en-us", {
      month: "long",
      day: "numeric",
    });
  },
};
