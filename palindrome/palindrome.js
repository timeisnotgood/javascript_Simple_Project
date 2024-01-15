let input = document.querySelector('.get')
let btn = document.querySelector('.btn')

let text = document.querySelector('.text_p')
let filterinput;

btn.addEventListener("click",()=>{

    let reverseinput = filterinput.split("").reverse().join("");

    if(filterinput == reverseinput){
        text.innerHTML = `yes <span>${reverseinput}</span> is a Palindrome`
        text.style.display = 'block'
    }
    else{
        text.innerHTML = `No! <span>${reverseinput}</span> is not a Palindrome`
        text.style.display = 'block'
    }
    console.log(filterinput,reverseinput);

    
})



input.addEventListener("keyup",()=>{
    filterinput = input.value;
})