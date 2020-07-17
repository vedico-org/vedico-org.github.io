const copyboxes = document.getElementsByClassName("copybox");
const fcb = copyboxes[0];
const scb = copyboxes[1];
const font_list = document.getElementsByClassName("ver-list")[0];
const svg_list = document.getElementsByClassName("ver-list")[1];

function display(text) {
  const list = document.getElementById("body-bottom");
  list.innerHTML = "";
  text = text.toLowerCase();
  for (let i = 0; i < icons.length; i++) {
    if (icons[i].name.toLowerCase().includes(text)) {
      const el = document.createElement("div");
      el.className = "icon";
      const icon = document.createElement("i");
      icon.className = "vedico-" + icons[i].font[0];
      const el_name = document.createElement("div");
      el_name.className = "name";
      el_name.textContent = icons[i].name;
      el.appendChild(icon);
      el.appendChild(el_name);
      list.appendChild(el);
      el.addEventListener("click", () => {
        getDetails(icons[i]);
      });
    }
  }
}

function showVersion(type, obj, id) {
  if (type == "svg") {
    scb.textContent = `<img src="https://cdn.jsdelivr.net/gh/vedico-org/vedico/svg/${obj.svg[id]}.svg">`;
    if (svg_list.getElementsByClassName("selected")[0] != undefined) {
      svg_list.getElementsByClassName("selected")[0].classList = "version";
    }
    svg_list.getElementsByClassName("version")[id].classList =
      "version selected";
  } else if (type == "font") {
    fcb.textContent = `<i class="vedico-${obj.font[id]}"></i>`;
    if (font_list.getElementsByClassName("selected")[0] != undefined) {
      font_list.getElementsByClassName("selected")[0].classList = "version";
    }
    font_list.getElementsByClassName("version")[id].classList =
      "version selected";
  }
}

function getDetails(obj) {
  const ico_name = document.getElementById("ico-name");
  ico_name.textContent = obj.name;
  font_list.innerHTML = "";
  svg_list.innerHTML = "";

  //FONT
  for (let x = 0; x < obj.font.length; x++) {
    const el = document.createElement("div");
    el.className = "version";
    const icon = document.createElement("i");
    icon.className = `vedico-${obj.font[x]}`;
    el.appendChild(icon);
    el.addEventListener("click", () => {
      showVersion("font", obj, x);
    });
    font_list.appendChild(el);
  }

  //SVG
  for (let y = 0; y < obj.svg.length; y++) {
    const el = document.createElement("div");
    el.className = "version";
    const img = document.createElement("img");
    img.src = `https://cdn.jsdelivr.net/gh/vedico-org/vedico/svg/${obj.svg[y]}.svg`;
    el.appendChild(img);
    el.addEventListener("click", () => {
      showVersion("svg", obj, y);
    });
    svg_list.appendChild(el);
  }

  showVersion("font", obj, 0);
  showVersion("svg", obj, 0);
}

function inputChange() {
  const input = document.getElementById("search");
  display(input.value);
}

display("");
getDetails(icons[0]);
