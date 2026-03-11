const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const title = document.getElementById("title");

if (btn && menu) {
  btn.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
}

if (title) {
  const text = title.textContent.split("");
  title.textContent = "";

  text.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("letter");
    span.style.animationDelay = `${index * 0.1}s`;
    title.appendChild(span);
  });
}