module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
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
  getDate: () => {
    return new Date().toLocaleDateString('en-us', { month: 'long', day: "numeric"});
  },
};
