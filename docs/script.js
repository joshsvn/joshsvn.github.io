if (Cookies.get("theme") == "light") {
  document.getElementById('checkbox').checked = true
  document.getElementsByTagName('body')[0].classList.add("light");
}
if (Cookies.get("theme") == "dark") {
  document.getElementById('checkbox').checked = false
  document.getElementsByTagName('body')[0].classList.remove("light");
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("channel-link");


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light")
})

function setTheme() {
  if (document.getElementById('checkbox').checked) {
    Cookies.set("theme","light");
  }
  else {
    Cookies.set("theme","dark");
  }
}