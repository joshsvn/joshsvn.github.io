var quotes=new Array();
quotes[0] = "Why so";
quotes[1] = "I'll be";
quotes[2] = "What's in the"
quotes[3] = "I'm"

var ending=new Array();
ending[0] = "serious?"
ending[1] = "back."
ending[2] = "box?!"
ending[3] = "vengence."

var speaker=new Array();
speaker[0] = "The Dark Knight"
speaker[1] = "The Terminator"
speaker[2] = "Se7en"
speaker[3] = "The Batman"

var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));

function showquote(){
    document.getElementById('quote').innerHTML = quotes[whichquote];
    document.getElementById('ending').innerHTML = ending[whichquote];
    document.getElementById('speaker').innerHTML = speaker[whichquote];
}

window.onload = function () {
    showquote();
}

window.addEventListener('unload', function(e){
    window.scrollTo(0, 0)
    });

const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("Follow me!");

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}