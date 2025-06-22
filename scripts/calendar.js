function generaCalendario(year, month) {
  const griglia = document.getElementById("griglia");
  griglia.innerHTML = "";

  const data = new Date(year, month, 1);
  const start = data.getDay();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthName = document.getElementById("month");

  monthName.innerHTML = monthNames[data.getMonth()];

  for (let i = 0; i < start; i++) {
    griglia.innerHTML += `<div class="giorno vuoto"></div>`;
  }

  while (data.getMonth() === month) {
    let rndimg = Math.floor(Math.random() * 4) + 1;
    griglia.innerHTML += `<div class="giorno rubik-marker-hatch-regular" style="background:url(../img/Tile_${rndimg}.png);background-repeat: no-repeat;background-size: cover;" 
    data-giorno="${data.getDate()}">${data.getDate()}</div>`;
    data.setDate(data.getDate() + 1);
  }
  $("#prev").on("click", function () {
    generaCalendario(year, month - 1);
  });
  $("#next").on("click", function () {
    generaCalendario(year, month + 1);
  });
}

$(document).ready(function () {
  let today = new Date();
  generaCalendario(parseInt(today.getFullYear()), parseInt(today.getMonth()));
});
