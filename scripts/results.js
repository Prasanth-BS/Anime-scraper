const searchResultsContainer = document.querySelector('.search-results-container')

function addGlobalEventListener(event, target, callback) {
    document.addEventListener(event, e => {
        if(e.target.matches(target)) callback(e)
    })
}


window.addEventListener('load', e => {
    searchResultsData = JSON.parse(localStorage.getItem('searchResults'))
    console.log(searchResultsContainer)
    console.log(searchResultsData)
    searchResultsContainer.innerHTML = ""
    searchResultsData.results.forEach( result => {
        searchResultsContainer.innerHTML += `
        <div class="search-result">
            <img id=${result.id} src=${result.image}>
            <p>${result.title}</p>
        </div>` 
    }) 
})