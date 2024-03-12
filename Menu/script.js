document.addEventListener('DOMContentLoaded', function () {
    var Video = document.getElementById('video');
    Video.addEventListener('canplay', function () {
        Video.play();
    });
});

function reproduceVideo() {
    var Video = document.getElementById('video');
    Video.play();
    document.getElementById('page').removeAttribute('onclick');
}