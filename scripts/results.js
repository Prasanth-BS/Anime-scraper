const baseURL = "https://api.consumet.org/anime"

const searchResultsContainer = document.querySelector('.search-results-container')

function addGlobalEventListener(event, target, callback) {
    document.addEventListener(event, e => {
        if(e.target.matches(target)) callback(e)
    })
}


window.addEventListener('load', e => {
    searchKey = localStorage.getItem('search-key')
    fetch(`${baseURL}/zoro/${searchKey}`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(result => {
            searchResultsContainer.innerHTML += `
            <div class="search-result">
                <img id=${result.id} src=${result.image}>
                <p>${result.title}</p>
            </div>`            
        })
    })
    // searchResultsData = JSON.parse(localStorage.getItem('searchResults'))
    // // console.log("at results page" + searchResultsData)
    // // console.log(searchResultsContainer)
    // // console.log(searchResultsData)
    // searchResultsContainer.innerHTML = ""
    // searchResultsData.results.forEach( result => {
    //     searchResultsContainer.innerHTML += `
    //     <div class="search-result">
    //         <img id=${result.id} src=${result.image}>
    //         <p>${result.title}</p>
    //     </div>` 
    // }) 
})