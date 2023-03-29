window.addEventListener('load', e => {
    episodeId = localStorage.getItem('episodeId')
    console.log(episodeId)
    fetch(`${baseURL}/enime/watch?episodeId=${episodeId}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.sources[0].url)
        loadVideo(data.sources[0].url)
    })
})

const loadVideo = (videoLink) => {
    var video = document.getElementById('video');
    if (Hls.isSupported()) {
      var hls = new Hls({
        debug: true,
      });
      hls.loadSource(videoLink);
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        video.muted = true;
        video.play();
      });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoLink;
      video.addEventListener('canplay', function () {
        video.play();
      });
    }
}

