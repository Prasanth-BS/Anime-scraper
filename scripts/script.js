const baseURL = "https://api.consumet.org/anime"
// const fetchURL = "https://api.consumet.org/anime/zoro/info?id="
//https://api.consumet.org/anime/zoro/info?id=spy-x-family-part-2-18152
// https://api.consumet.org/anime/zoro/watch?episodeId=%22spy-x-family-part-2-18152$episode$94360%22

const search = document.getElementById('search-anime')
const searchBtn = document.getElementById('search-btn')

function addGlobalEventListener(event, target, callback) {
    document.addEventListener(event, e => {
        if(e.target.matches(target)) callback(e)
    })
}

addGlobalEventListener('click', '#search-btn', (e) => {
    fetch(`${baseURL}/zoro/${search.value}`)
        .then(res => res.json())
        .then(data => {
            // console.log("after fetch" + data)
            localStorage.setItem('searchResults', JSON.stringify(data))
            // console.log("after stored " + JSON.parse(localStorage.getItem('searchResults')))
            
            window.location.href='results.html'
        })
        
    
})

const fetchAnimeInfo = (animeId) => {
    fetch(`${ baseURL }/zoro/info?id=${ animeId }`)
    .then(res => res.json())
    .then(data => {
        console.log(data.description)
        const animeContainer = document.querySelector(".anime-container")
        animeContainer.innerHTML = 
        `<div class="title">${data.title}</div>
         <div class="description"> ${data.description} </div>
         <div class="poster">
            <img src="${data.image}">
         </div>
         <div class="episodes">${data.totalEpisodes}</div>
         <div class="read-now">Read now</div>`
    })
}

addGlobalEventListener('click', '.search-result > img', (e) => {
    fetchAnimeInfo(e.target.id)
})

// document.addEventListener('click' , e => {
//     console.log(e.target.id)
// })