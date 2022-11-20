// Write your solution here!
let cats =["Milo", "Otis", "Garfield"]
function cats(name){
    cats.length=0;
     return name;
}
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;

}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return[name,...cats];
}

function removeFirstCat(){
return cats.slice(1);
}
function removeLastCat(){
    return cats.slice(0,cats.length-1);
}
    

