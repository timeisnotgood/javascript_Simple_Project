const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    btn.classList.add = 'loading'
    btn.innerHTML = "Loading..."
    setTimeout(()=>{
        btn.classList.remove = 'loading'
        btn.innerHTML = 'Click Me'
    }, 2000)
})