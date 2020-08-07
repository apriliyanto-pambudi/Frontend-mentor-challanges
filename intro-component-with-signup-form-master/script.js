const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstname", "First name cannot be empty");
  } else {
    removeError("firstname");
  }

  if (lastName === "") {
    addErrorTo("lastname", "Last name cannot be empty");
  } else {
    removeError("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Looks like this is not an email");
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeError("email");
  }

  if (password === "") {
    addErrorTo("password", "Password cannot be empty");
  } else {
    removeError("password");
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.opacity = "1";
}

function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");

  const small = formControl.querySelector("small");
  small.style.opacity = "0";
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
