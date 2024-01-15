let input = document.querySelector('.input')
let btn = document.querySelector('.btn')

let randomnum = "";

let arrry = "qwertyuiopasdhfkb;lcnmzbnjl/.,']=-09879321312!@@#%^*&())+_{}}:?><|";



btn.addEventListener("click",()=>{
    for(let i = 0;i < 16 ; i++){
        let ran = Math.floor(Math.random()*arrry.length)
        randomnum = randomnum +arrry.charAt(ran)
    }
    input.value = randomnum
})


let far = document.querySelector('.far').addEventListener("click",()=>{
    input.select();
    document.execCommand('copy')
})