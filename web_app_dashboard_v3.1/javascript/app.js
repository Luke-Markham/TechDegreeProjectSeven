// close alert ----

const closeAlert = document.querySelector(".close-alert");
const alertBox = closeAlert.parentNode;

closeAlert.addEventListener("click", e => {
  alertBox.style.display = "none";
});

// slider on/off --

const slider1 = document.querySelector(".slider-notifications");
const slider2 = document.querySelector(".slider-privacy");
const slider = document.querySelectorAll(".slider");
const on1 = slider[0].firstElementChild;
const off1 = on1.nextElementSibling;
const on2 = slider[1].firstElementChild;
const off2 = on2.nextElementSibling;

function notificationsChecked() {
  slider1.setAttribute("checked", "checked");

  if (slider1.checked === true) {
    on1.style.display = "inline-block";
    off1.style.display = "none";
  } else {
    on1.style.display = "none";
    off1.style.display = "inline-block";
  }
}

function privacyChecked() {
  slider2.setAttribute("checked", "checked");

  if (slider2.checked === true) {
    on2.style.display = "inline-block";
    off2.style.display = "none";
  } else {
    on2.style.display = "none";
    off2.style.display = "inline-block";
  }
}
