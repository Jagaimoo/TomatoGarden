const playlist = document.getElementById("music");
let num_song = 0;
const frase = $("<p>Trascina una canzone MP3 o MP4 per ascoltarla</p>");

playlist.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
  playlist.classList.add("hover");
});

playlist.addEventListener("dragleave", (e) => {
  e.preventDefault();
  e.stopPropagation();
  playlist.classList.remove("hover");
});

playlist.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();
  playlist.classList.remove("hover");

  if (num_song == 0) {
    frase.remove();
    playlist.classList.remove("musicNP");
    playlist.classList.add("musicP");
  }
  num_song += 1;

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type === "audio/mp3" || file.type === "audio/mpeg") {
        const url = URL.createObjectURL(file);
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = url;
        audio.className = "audio-item";

        const label = document.createElement("div");
        label.className = "audio-label";
        label.textContent = file.name;

        const container = document.createElement("div");
        container.appendChild(label);
        container.appendChild(audio);

        playlist.appendChild(container);

        console.log("Aggiunto MP3:", file.name);
      } else {
        alert("Per favore trascina solo file MP3!");
      }
    }
  }
});

$(document).ready(function () {
  if (num_song == 0) {
    $("#music").append(frase);
    playlist.classList.add("musicNP");
  }
});
