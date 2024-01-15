const Celciuse = document.getElementById('Celciuse')
const Fahrenheit = document.getElementById('Fahrenheit')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', ()=>{
    if(Celciuse.value !=+ ' '){
        const Cel = parseFloat(Celciuse.value)
        const far = (Cel *9/5) +32
        Fahrenheit.value = far.toFixed(2)
        result.textContent = `${Celciuse.value}-c is converted to ${far.toFixed(2)}`
    }
    else if(Fahrenheit.value !=+ ' '){
        const far = parseFloat(Fahrenheit.value)
        const cel = (far -32) * 5/9
        Celciuse.value = cel.toFixed(2)
        result.textContent = `${Fahrenheit.value}-f is converted to ${cel.toFixed(2)}-c`
    }
    else{
        result.textContent = " please Enter Value "
    }
})