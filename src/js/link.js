const linkAll = document.querySelector(".link-all");
const linkForm = document.querySelector(".favorite-link-form");
const linkFormInput = document.querySelector(".favorite-link-input");

const LINK = "link";
const KEY_LINK = "FVLink";

let favoriteLink = [];
let time = 0;

function localSavedLink() {
  localStorage.setItem(KEY_LINK, JSON.stringify(favoriteLink));
}

function addFavoriteLink(url) {
  const link = document.createElement("a");
  link.id = url.id;
  link.setAttribute("class", LINK);
  linkAll.append(link);
  link.href = url.text;
  link.innerHTML = `${time + 1}`;
}

function onLinkFormSubmit(e) {
  e.preventDefault();
  const urlLink = linkFormInput.value;
  linkFormInput.value = "";
  const urlObj = {
    text: urlLink,
    id: Date.now(),
  };
  favoriteLink.push(urlObj);
  localSavedLink();
  addFavoriteLink(urlObj);
}

linkForm.addEventListener("submit", onLinkFormSubmit);

const savedLinks = localStorage.getItem(KEY_LINK);

if (savedLinks !== null) {
  const parsedLinks = JSON.parse(savedLinks);
  favoriteLink = parsedLinks;
  parsedLinks.forEach(addFavoriteLink);
}
