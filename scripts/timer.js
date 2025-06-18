let intervalId = null;
let counter = 10;
$("#BStart").on("click", function () {
  clearInterval(intervalId);
  counter = 10;
  $("#Ttime").html(counter);
  intervalId = setInterval(function () {
    counter--;
    $("#Ttime").html(counter);
    if (counter <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
});
/*codice timer (da modificare) */

$("#BReset").click(function () {
  clearInterval(intervalId);
  $("#Ttime").html(0);
});
$(document).ready(function () {
  if ($("#clock").width() > 300) {
    $("#Ttitle").css("font-size", 40 + ($("#clock").width() - 300) / 8);
    $("#Ttime").css("font-size", 50 + ($("#clock").width() - 300) / 8);
    $(".buttons").css("height", 40 + ($("#clock").width() - 300) / 8);
    $(".buttons").css("font-size", 16 + ($("#clock").width() - 300) / 10);
  }
});
/*per ingrandire le scritte al loading della pagina*/

$(window).resize(function () {
  if ($("#clock").width() > 300) {
    $("#Ttitle").css("font-size", 40 + ($("#clock").width() - 300) / 8);
    $("#Ttime").css("font-size", 50 + ($("#clock").width() - 300) / 8);
    $(".buttons").css("height", 40 + ($("#clock").width() - 300) / 8);
    $(".buttons").css("font-size", 16 + ($("#clock").width() - 300) / 10);
  } else {
    $("#Ttitle").css("font-size", 40);
    $("#Ttime").css("font-size", 50);
    $(".buttons").css("height", 40);
    $(".buttons").css("font-size", 16);
  }
});
/*per ingrandire le scritte al resizing della pagina */
