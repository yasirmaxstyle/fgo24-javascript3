function printQueue(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, delay);
        if (typeof name !== "string" || typeof delay !== "number" || delay < 0) {
            reject('maaf input salah')
        }
    })
}

// console.time

// printQueue('John', 1500)
//     .then(name => {
//         console.log(name)
//         printQueue('Ed', 2000).
//             then(name => {
//                 console.log(name)
//                 printQueue('Jane', 500).
//                     then(name => {
//                         console.log(name)
//                     })
//             })
//     }).
//     catch(err => {
//         console.log(err)
//     })



async function handleAsync() {
    try {
        const john = await printQueue('John', "eee")
        console.log(john)
        const ed = await printQueue('Ed', 2000)
        console.log(ed)
        const jane = await printQueue('Jane', 500)
        console.log(jane)
    } catch (error) {
        console.log(error)
    }
}

handleAsync()

