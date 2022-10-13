const baseURL = "https://api.consumet.org/anime"

const search = document.getElementById('search-anime')
const searchBtn = document.getElementById('search-btn')


function addGlobalEventListener(event, target, callback) {
    document.addEventListener(event, e => {
        if(e.target.matches(target)) callback(e)
    })
}

addGlobalEventListener('click', '#search-btn', (e) => {
    // window.location.href = "view-anime.html"
    const searchResultsContainer = document.querySelector('.search-results-container')
    searchResultsContainer.innerHTML=""
    // console.log(searchResultsContainer)
    // console.log("sdfasdfa")
        fetch(`${baseURL}/zoro/${search.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.results.forEach(result => {
                searchResultsContainer.innerHTML += `
                <div class='search-result'>
                    <img id=${result.id} src=${result.image}>
                    <p>${result.title}</p> 
                </div>`
                console.log(result)
            })
        })
    
})

addGlobalEventListener('click', '.search-result > img', (e) => {
    // window.location.href = "view-anime.html"
})