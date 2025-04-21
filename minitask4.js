function isPalindrom(word) {
    const reversed = word.split('').map((el, idx, arr) => arr[arr.length - 1 - idx]).join('')
    if (word === reversed) return 'palindrom'
    else return 'not palindrom'
}

function reverseWords(sentence) {
    const reversed = sentence.split(' ').map((el, idx, arr) => arr[arr.length - 1 - idx]).join(' ')
    return reversed
}

// manual method

function isPalindromManual(word) {
    if (typeof word !== 'string') return 'data harus bertipe string'

    let reversed = ''
    for (let i = 0; i < word.length; i++) {
        reversed += word[word.length - 1 - i]
    }

    if (word === reversed) return 'palindrom'
    else return 'bukan palindrom'
}

function reverseWordsManual(sentence) {
    if (typeof sentence !== 'string') return 'tipe data harus string'
    if (!sentence.includes(' ')) return 'input harus berupa kalimat'

    let word = ''
    let reversed = ''

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            // add space before new word to make it like sentence
            reversed = ' ' + word + reversed
            // stop collecting to word
            word = ''
        } else word = word + sentence[i]
    }

    // last word is not inserted to reversed thus we add it in result
    return word + reversed
}
