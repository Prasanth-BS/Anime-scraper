const baseURL = "https://api.consumet.org/anime"
let episodes 
let episodeId

// const fetchURL = "https://api.consumet.org/anime/zoro/info?id="
//https://api.consumet.org/anime/zoro/info?id=spy-x-family-part-2-18152
// https://api.consumet.org/anime/zoro/watch?episodeId=%22spy-x-family-part-2-18152$episode$94360%22

const searchBar= document.getElementById('search-anime')
const searchBtn = document.getElementById('search-btn')

function addGlobalEventListener(event, target, callback) {
    document.addEventListener(event, e => {
        if(e.target.matches(target)) callback(e)
    })
}

addGlobalEventListener('click', '#search-btn', (e) => {
    localStorage.setItem('search-key', searchBar.value)
    window.location.href="results.html"      
})
