function isPalindrom(word) {
    const reversed = word.split('').map((el, idx, arr) => arr[arr.length - 1 - idx]).join('')
    if (word === reversed) return 'palindrom'
    else return 'not palindrom'
}

function reverseWords(sentence) {
    const reversed = sentence.split(' ').map((el, idx, arr) => arr[arr.length - 1 - idx]).join(' ')
    return reversed
}