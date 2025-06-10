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


// async function fetchData() {
//     try {
//         let response = await fetch(`https://j1sonplaceholder.typicode.com/todos?bacon=fresh`)
//         console.log('Response: ', response)
//         let json = await response.json()
//         console.log('JSON Response: ', json)

//         if (json.length < 1) {
//             console.log('No data found')
//         }
//     } catch (error) {
//         console.error('Error fetching data: ', error)
//         alert('Error fetching data: ' + error.message)
//     }
// }

// fetchData()


document.getElementById('myForm').addEventListener('submit', function () {
    async function submitForm(event) {
        event.preventDefault() // Prevent the default form submission
        const form = event.target;

        const formData = {
            name: form.name.value,
            email: form.email.value
        }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'javascript',
                    body: 'made easy',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

            // if (!response.ok) {
            //     throw new Error("Network response was not ok")
            // }

            const data = await response.json()

            console.log("Form submitted successfully: ", data)
        } catch (error) {
            console.error("Error submitting form: ", error)
            alert("Error submitting form: " + error.message)
        }
    }

    submitForm(event)
})