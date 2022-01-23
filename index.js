// Detecting Button Press

for (var i=0; i<document.querySelectorAll(".instrument").length; i++) {

  document.querySelectorAll(".instrument")[i].addEventListener("click", function () {

    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

// Detecting keyboard press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {

    case "z":
      var myAudio1 = new Audio("sounds/tom-1.mp3");
      myAudio1.play();
    break;

    case "x":
      var myAudio2 = new Audio("sounds/crash.mp3");
      myAudio2.play();
    break;

    case "c":
      var myAudio3 = new Audio("sounds/tom-2.mp3");
      myAudio3.play();
    break;

    case "v":
      var myAudio4 = new Audio("sounds/tom-3.mp3");
      myAudio4.play();
    break;

    case "b":
      var myAudio5 = new Audio("sounds/tom-4.mp3");
      myAudio5.play();
    break;

    case "n":
      var myAudio6 = new Audio("sounds/snare.mp3");
      myAudio6.play();
    break;

    case "m":
      var myAudio7 = new Audio("sounds/kick-bass.mp3");
      myAudio7.play();
    break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {

  var activeKey = document.querySelector("." + currentKey);

  activeKey.classList.add("pressed");

  setTimeout(function() {

    activeKey.classList.remove("pressed");

  }, 90);

}
