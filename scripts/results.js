const baseURL = "https://api.consumet.org/anime"

const searchResultsContainer = document.querySelector('.search-results-container')
const search = document.getElementById('search-btn')
const searchBar = document.getElementById('search-anime')
const searchElement = document.getElementById('search-element')

function addGlobalEventListener(event, target, callback) {
    document.addEventListener(event, e => {
        if(e.target.matches(target)) callback(e)
    })
}


const showResults = () => {
    
    searchKey = localStorage.getItem('search-key')
    searchElement.innerHTML = searchKey
    searchResultsContainer.innerHTML = ""
    fetch(`${baseURL}/zoro/${searchKey}`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(result => {
            searchResultsContainer.innerHTML += `
            <div class="search-result">
                <img id=${result.id} src=${result.image}>
                <p>${result.title}</p>
                <div class="color-divider"></div>
            </div>`            
        })
    })
}

window.addEventListener('load', e => {
    showResults() 
})

addGlobalEventListener('click', '#search-btn', e => {
    localStorage.setItem('search-key', searchBar.value)
    showResults()

})

addGlobalEventListener('click', '.search-result > img', e => {
    localStorage.setItem('anime-id', e.target.id)
    window.location.href = "view-anime.html"
})