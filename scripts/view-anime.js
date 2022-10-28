const infoFetchURL = "https://api.consumet.org/anime/enime/info?id="

const animeWrapper = document.querySelector('.anime-wrapper')

window.addEventListener('load', e => {
    const animeId = localStorage.getItem('anime-id')
    fetch(infoFetchURL + animeId)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        animeWrapper.innerHTML = `
        <div class="wallpaper"  style="background-image: url(${data.cover});"> </div>
        <div class="anime-container">
            <div class="anime">
                <div class="title">${data.title}</div>
                <div class="poster">
                    <img src=${data.image}>
                </div>
                    <div class="description">
                        <div class="description-content">
                            ${data.description}
                        </div> 
                    </div>
                <div class="total-episodes">Total Episodes: <span>${data.episodes.length}</span></div> 
            </div>   
            <div class="episode-wrapper">
                <div class="episode-wrapper-head">Episodes</div>
                <div class="episode-wrapper-body">
                </div>
            </div> 
        </div>`
        const episodeWrapperbody = document.querySelector('.episode-wrapper-body')
        episodeWrapperbody.innerHTML = ""
        data.episodes.forEach(episode => {
            episodeWrapperbody.innerHTML += `
            <div class="episode" id=${episode.id}>
                <span id=${episode.id} >${episode.number}<span> 
             </div>`
        episodes = data.episodes
        })

    })
})

addGlobalEventListener('click', '.episode', e => {
    localStorage.setItem('episodeId', e.target.id)
    // episodeId = e.target.id
    // console.log(episodeId)
    window.location.href="play-anime.html"
})

addGlobalEventListener('click', '.episode > span', e => {
    localStorage.setItem('episodeId', e.target.id)
    window.location.href="play-anime.html"
})

/* <div class="view-more__wrapper">
                        <button class="view-more"> View more <i class="fa-solid fa-angle-down"></i></button>
                    </div> */

                    // <div class="episode">
                    //     <span>1024<span> 
                    // </div>