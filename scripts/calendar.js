

function generaCalendario(year, month) {
    const griglia = document.getElementById('griglia');
    griglia.innerHTML = '';

    const data = new Date(year, month, 1);
    const start = data.getDay();  // giorno della settimana

    for (let i = 0; i < start; i++) {
        griglia.innerHTML += `<div class="giorno vuoto"></div>`;
    }

    while (data.getMonth() === month) {
        griglia.innerHTML += `<div class="giorno" data-giorno="${data.getDate()}">${data.getDate()}</div>`;
        data.setDate(data.getDate() + 1);
    }
}

$(document).ready(function () {
    let today = new Date();
    generaCalendario(parseInt(today.getFullYear()), parseInt(today.getMonth()));
});
