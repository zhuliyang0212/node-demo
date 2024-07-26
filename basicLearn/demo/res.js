let tds = document.querySelectorAll("td");

tds.forEach(v => {
  v.onclick = function () {
    v.style.background = "#000";
  };
});
