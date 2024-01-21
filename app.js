"use strict";

const form = document.querySelector("#myform");
form.addEventListener("submit", (e) => {
  if (form.username.value < 5) {
    e.preventDefault();
    alert("Your username is have more than 5 charectors!");
  }
  if (form.age.value < 18 || form.age.value > 65 || form.age.value == "") {
    e.preventDefault();
    alert("Your age is not valid!");
  }
  const emailregix =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailregix.test(form.email.value)) {
    e.preventDefault();
    alert("Your email is not valid!");
  }
});
