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
    try {
        let response = await fetch(`https://j1sonplaceholder.typicode.com/todos?bacon=fresh`)
        console.log('Response: ', response)
        let json = await response.json()
        console.log('JSON Response: ', json)

        if (json.length < 1) {
            console.log('No data found')
        }
    } catch (error) {
        console.error('Error fetching data: ', error)
        alert('Error fetching data: ' + error.message)
    }
}

fetchData()