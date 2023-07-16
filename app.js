let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("icon-success"),
  failureIcon = classes("icon-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "O nome é obrigatório");
  engine(email, 1, "Email é obrigatório");
  engine(password, 2, "Senha é obrigatória");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "1px solid red";

    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "1px solid green";

    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
