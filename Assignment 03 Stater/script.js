// const emailForm = document.getElementById("emailForm");
// const emailInput = document.getElementById("emailInput");
// const submitButton = document.getElementById("submitButton");
// const info = document.getElementById("info");
// const emailInfo = document.getElementById("emailInfo");

// emailForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const email = emailInput.value.trim();

//   const regex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (regex.test(email)) {
//     emailForm.style.display = "none";
//     info.style.display = "block";
//     emailInfo.textContent = email;
//   } else {
//     alert("Invalid email format");
//   }
// });
// const skills = document.querySelectorAll(".skill");

// skills.forEach((skill) => {
//   const title = skill.querySelector(".skill-title");
//   const info = skill.querySelector(".part");
//   const viewMore = skill.querySelector(".view-more");

//   viewMore.addEventListener("click", () => {
//     if (info.style.display === "none") {
//       info.style.display = "block";
//       viewMore.textContent = "View Less";
//     } else {
//       info.style.display = "none";
//       viewMore.textContent = "View More";
//     }
//   });
// });
