const urlParams = new URLSearchParams(window.location.search)
console.log('URL Parameters: ', urlParams)

const query = urlParams.get("query")
console.log('Query Parameter: ', query)

const category = urlParams.get("category")
console.log('Category Parameter: ', category)

const page = urlParams.get("page")
console.log('Page Parameter: ', page)

// check if a parameter exists
if (urlParams.has("page")) {
    console.log('URL has parameters')
} else {
    console.log('URL does not have parameters')
}


async function fetchData() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    console.log('Response: ', response)
    let json = await response.json()
    console.log('JSON Response: ', json)
}

fetchData()