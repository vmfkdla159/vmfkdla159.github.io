const image = ["1.webp", "2.jpeg", "3.webp", "4.jpeg", "5.webp", "6.webp"];

const randomImg = image[Math.floor(Math.random() * image.length)];

const bgimg = document.createElement("img");

bgimg.setAttribute("class", "bgimg");

bgimg.src = `src/img/${randomImg}`;

console.log(bgimg);
document.body.appendChild(bgimg);
