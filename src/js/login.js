const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login-id");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const title = document.querySelector(".title");

const CLASSNAME_HIDDEN = "hidden";
const USERNAME = "username";

function onLoginFormSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(CLASSNAME_HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  paintHidden(username);
}

function paintHidden(username) {
  title.innerText = `Welcome!\n ${username}`;
  main.classList.remove(CLASSNAME_HIDDEN);
  footer.classList.remove(CLASSNAME_HIDDEN);
}

const localStorageID = localStorage.getItem(USERNAME);

if (localStorageID === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginFormSubmit);
} else {
  paintHidden(localStorageID);
}
