// using built in method
// async
async function getDataUserAsync() {
    try {
        const url = "https://jsonplaceholder.typicode.com/users"
        const res = await fetch(url)
        const body = await res.json()
        const emails = []
        body.forEach(data => {
            emails.push(data.email.toLowerCase())
        })
        console.log(emails)
    } catch (error) {
        console.log(error)
    }
}

// then-catch
function getDataUser() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const res = fetch(url)
    return res
}

getDataUser().then(res => {
    body = res.json()
    return body
}).then(body => {
    const emails = []
    body.forEach(data => {
        emails.push(data.email.toLowerCase())
    })
    console.log(emails)
}).catch(err => {
    console.log(err)
})