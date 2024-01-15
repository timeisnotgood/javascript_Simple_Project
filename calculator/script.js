const display = document.getElementById('display')

const appendToDisplay =(value) =>{
    display.value += value
}

const calculate = () =>{
    try {
        display.value = eval(display.value)
    } catch (error) {
        console.log("error");
    }
}

const clear = () =>{
    
    display.value =  ' '
}
















// const display = document.getElementById('display')

// const appendToDisplay =(value) =>{
//     display.value += value
// }

// const calculate = () =>{
//     try {
//         display.value = eval(display.value)
//     } catch (error) {
//         console.log("error in code");
//     }
// }

// const clearDisplay = () =>{
//     display.value = ' '
// }