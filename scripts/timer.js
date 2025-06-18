let intervalId = null;
let counter = 10;
let paused = true;
let WindWidth;
function counting() {
  $("#Ttime").html(counter);
  intervalId = setInterval(function () {
    if(counter > 0){
      counter--;
      $("#Ttime").html(counter);
    }
    if (counter <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

$("#BStart").on("click", function () {
  if(paused){
    counting();
    paused = false;
  }
});

$("#BReset").click(function () {
  paused = false;
  clearInterval(intervalId);
  counter = 10;
  counting();

});

$("#BPause").click(function () {
  if (paused == false) {
    clearInterval(intervalId);
    paused = true;
  }
})


$(document).ready(function () {
  WindWidth = $("#clock").width();
  if (WindWidth > 300) {
    $("#Ttitle").css("font-size", 40 + (WindWidth - 300) / 8);
    $("#Ttime").css("font-size", 50 + (WindWidth - 300) / 8);
    $(".buttons").css("height", 30 + (WindWidth - 300) / 8);
    $(".buttons").css("font-size", 15 + (WindWidth - 300) / 13);
    $(".buttons").css("font-size", 15 + (WindWidth - 300) / 13);
    $(".buttons").css("border-width", 4 + (WindWidth - 300) / 80);

    $(".Bnavbar").css("height", 70 + (WindWidth - 300) / 10);
    $(".Bnavbar").css("width", 70 + (WindWidth - 300) / 10);
  }
});
/*per ingrandire le scritte al loading della pagina*/

$(window).resize(function () {
  WindWidth = $("#clock").width();
  if (WindWidth > 300) {
    $("#Ttitle").css("font-size", 40 + (WindWidth - 300) / 8);
    $("#Ttime").css("font-size", 50 + (WindWidth - 300) / 8);
    $(".buttons").css("height", 30 + (WindWidth - 300) / 8);
    $(".buttons").css("font-size", 15 + (WindWidth - 300) / 13);
    $(".buttons").css("border-width", 4 + (WindWidth - 300) / 80);

    $(".Bnavbar").css("height", 70 + (WindWidth - 300) / 10);
    $(".Bnavbar").css("width", 70 + (WindWidth - 300) / 10);



  } else {
    $("#Ttitle").css("font-size", 40);
    $("#Ttime").css("font-size", 50);
    $(".buttons").css("height", 30);
    $(".buttons").css("font-size", 15);
    $(".buttons").css("border-width", 4);

    $(".Bnavbar").css("height", 70 );
    $(".Bnavbar").css("width", 70 );

  }
});
/*per ingrandire le scritte al resizing della pagina */
