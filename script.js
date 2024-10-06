//PART 1 
let counter = 0
function incrementCounter() {
    counter++
    incrementCounter();
}

try{
    incrementCounter()
} catch(error){
    console.log("Error: ", error.message)
    console.log("Last value of counter: ", counter)
}