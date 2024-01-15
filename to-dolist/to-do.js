let add = document.querySelector('.add')
let input = document.querySelector('.input')
let cont = document.querySelector('.main')


add.addEventListener("click",()=>{
    let task = document.createElement('div');
    task.classList.add('task')

    let p =document.createElement('p');
    p.innerText = `${input.value}`
    task.append(p)

    let done = document.createElement('button')
    done.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    done.classList.add('btn')
    task.appendChild(done)

    let delet = document.createElement('button')
    delet.innerHTML = 'D'
    delet.classList.add('btn')
    task.appendChild(delet)

    if(input.value == ''){
        alert("Fields Should not be Empty")
    }else{
        cont.appendChild(task)
    }

    done.addEventListener("click",()=>{
        p.style.textDecoration = 'line-through'
    })

    delet.addEventListener("click",(e)=>{
        let target = e.target;

        target.parentElement.remove();
    })
})

