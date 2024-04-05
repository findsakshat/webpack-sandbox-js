function renderUI() {
  const root = document.getElementById("root");

  // HEADING
  const heading = document.createElement("h1");
  heading.innerText = "Hello from Webpack 1234"

  // IMAGE 
  const image = document.createElement("img");
  image.setAttribute("src", "/dog.jpeg");
  image.setAttribute("alt", "vodafone-doggy");
  image.setAttribute("height", "300");
  image.setAttribute("width", "300");

  image.style.border = "1px solid #eee",
  image.style.borderRadius = "8px";

  // APPEND TO THE ROOT
  root.appendChild(heading);
  root.appendChild(image);
}

renderUI();
