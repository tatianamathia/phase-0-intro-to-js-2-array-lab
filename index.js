// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop ("Ralph")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
}
function appendCat(Broom){
    return[...cats,Broom]
}
function prependCat(Arnold){
    return[Arnold ,...cats]
}
function removeFirstCat(){
    return cats.slice(1)
}
function removeLastCat(){
    return cats.slice(0,cats.length-1)
}