/* main.js */

/* ========= 共用函式 ========= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.toggle("active");
}

function copyEmail() {
  const email = "jacob20020519@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email is copied！");
  });
}

function toggle(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const isHidden = window.getComputedStyle(el).display === "none";
  el.style.display = isHidden ? "block" : "none";
}

/* ========= 當頁載入完成後才插入 Navbar ========= */
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar-placeholder").innerHTML = html;
    })
    .catch(err => console.error("無法載入導覽列：", err));
});

/* back artical*/
fetch('../../back.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('back-placeholder').innerHTML = data;
    });




