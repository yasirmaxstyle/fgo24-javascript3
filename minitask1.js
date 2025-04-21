const arr1 = ['1', '2', '3', '4', '5']

//built-in method
arr1.reverse()

// manual method
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[arr1.length - 1 - i]
}
