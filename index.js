var userar = [];
var comparr = [];

// creation of random number

function nextSequence() {
  var randomN = Math.random();

  var num = Math.round(randomN * 3);

  return num;
}

// var randomNumber = nextSequence();

// function to create random pattern

function createNew(random) {
  if (random === 0) {
    comparr.push("g");
    var audr = new Audio("sounds/green.mp3");
    audr.play();
    bclassname = "g";
  } else if (random === 1) {
    comparr.push("r");

    var audr = new Audio("sounds/red.mp3");
    audr.play();
    bclassname = "r";
  } else if (random === 2) {
    comparr.push("b");

    var audr = new Audio("sounds/blue.mp3");
    audr.play();
    bclassname = "b";
  } else {
    comparr.push("y");

    var audr = new Audio("sounds/yellow.mp3");
    audr.play();
    bclassname = "y";
  }

  $("." + bclassname) //.y  or .r  or .b
    .fadeOut(200)
    .fadeIn(100);
}

// gives random pattern when any key is pressed

document.addEventListener("keypress", function () {
  randomNumber = nextSequence();

  createNew(randomNumber);
});

// this is for android devices
$(".btn0").on("click", function () {
  $(".btn0").hide();

  randomNumber = nextSequence();

  createNew(randomNumber);
});

var userlen = 0;
var comparrlen = 1;
var i = 0;
var levelValue = 0;
var updateValue = 0;

$(".gameover").hide();

// function for click buttons

$(".btn1").on("click", function () {
  $(".btn0").hide();

  var newcl = this;

  newcl.classList.add("pressed");

  setTimeout(function () {
    newcl.classList.remove("pressed");
  }, 100);

  if (newcl.innerHTML === "g") {
    userar.push("g");

    var aud1 = new Audio("sounds/green.mp3");
    aud1.play();
  } else if (newcl.innerHTML === "r") {
    userar.push("r");

    var aud1 = new Audio("sounds/red.mp3");
    aud1.play();
  } else if (newcl.innerHTML === "b") {
    userar.push("b");
    var aud1 = new Audio("sounds/blue.mp3");
    aud1.play();
  } else {
    userar.push("y");

    var aud1 = new Audio("sounds/yellow.mp3");
    aud1.play();
  }

  userlen++;
  i++;

  //  check console, how the pattern works of both user and website

  console.log(comparr);
  console.log(userar);

  console.log(comparrlen);

  //  checking the rules of game

  if (
    userar[userlen - 1] === comparr[comparrlen - 1] &&
    userlen === comparrlen
  ) {
    userlen = 0;

    i = 0;

    levelValue = updateValue + comparrlen;
    $("h1").text("Level " + levelValue);

    comparrlen++;
    userar = [];
    randomNumber = nextSequence();
    setTimeout(function () {
      createNew(randomNumber);
    }, 800);
  } else if (userar[userlen - 1] === comparr[i - 1]) {
    // console.log("you clicked correct box.");
  } else {
    console.log("you clicked wrong box.");

    var audd1 = new Audio("sounds/wrong.mp3");

    audd1.play();

    // display of game over

    setTimeout(function () {
      for (var k = 0; k < 4; k++) {
        $(".gameover").show();

        $(".buttons").hide();
        $(".sticker").hide();
        $("h1").hide();

        document.querySelectorAll("button")[k].classList.remove("game-over");
      }
    }, 5);

    setTimeout(function () {
      $(".gameover").hide();
      $("h1").show();
      $("h1").text("Your Score: " + comparrlen);
    }, 1500);

    setTimeout(function () {
      location.reload();
    }, 3500);

    $(".btnre").on("click", function () {
      var newre = this;
      newre.classList.add("pressed");
      setTimeout(function () {
        newre.classList.remove("pressed");
      }, 100);

      setTimeout(function () {
        location.reload();
      }, 500);
    });
  }
});
