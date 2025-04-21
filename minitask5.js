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

printQueue('John', 1500)
    .then(name => {
        console.log(name)
        printQueue('Ed', 2000).
            then(name => {
                console.log(name)
                printQueue('Jane', 500).
                    then(name => {
                        console.log(name)
                    })
            })
    }).
    catch(err => {
        console.log(err)
    })