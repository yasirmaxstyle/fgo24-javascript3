const animal = "ayam,bebek,sapi,unta"
//chaining built-in method
//output "ayam,bebek,domba,unta

console.log(animal.split(',').with(2, "domba").join())