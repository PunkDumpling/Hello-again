function changeMedia(newGif, newAudio) {
    document.getElementById('centerGif').src = newGif;
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = newAudio;
    audioPlayer.play();
}