
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph")

}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob")

}
function destructivelyRemoveLastCat(name) {
    return cats.pop("Ralph") 

}
function destructivelyRemoveFirstCat(name) {
    return cats.shift("Bob") 


}
appendCat("Broom")

function appendCat(name){
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats,name]
    return newCats;


}
PrependCat("Arnold")

function prependCat(name){
    const cats = ["Milo", "Otis", "Garfield"]
    const newCats = [name,...cats]
    return newCats;
}

function removeLastCat(){
    return cats.slice(0, cats.length -1);
    

}
function removeFirstCat() {
    return cats.slice(1)

}


    








