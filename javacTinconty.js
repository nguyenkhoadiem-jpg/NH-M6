document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        var audio = document.querySelector("audio");
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});