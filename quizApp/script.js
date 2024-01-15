let quiz =[
    {
        que:"Which Language do you use",
        a:"java",
        b:"c",
        c:"phyton",
        d:"php",
        correct:"b"
    },{
        que:"What is your age",
        a:"10",
        b:"15",
        c:"20",
        d:"Above 25",
        correct:"a"
    },{
        que:"Do you Have Girlfriend",
        a:"Yes",
        b:"No",
        c:"I've Had",
        d:"I'am Going to ",
        correct:"d"
    },
    {
        que:"What's your Hobbies",
        a:"Sport",
        b:"Studies",
        c:"Traveling",
        d:"Working",
        correct:"c"
    }
]


let question =document.querySelector('.question')
let ans = document.querySelectorAll('.option')

let index =0;
let total = quiz.length;
let right = 0,wrong= 0;

function loadquestion(){

    if(index==total){
        end();
    }
    reset()
    let data = quiz[index]

    question.innerHTML = `${index+1}) ${data.que}`
    ans[0].nextElementSibling.innerHTML=data.a
    ans[1].nextElementSibling.innerHTML=data.b
    ans[2].nextElementSibling.innerHTML=data.c
    ans[3].nextElementSibling.innerHTML=data.d

}

console.log()


document.querySelector('.btn').addEventListener("click",submitbtn)

function submitbtn(){
    let data = quiz[index]
    const ans = submitanswer();

    if(ans == data.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadquestion()
    return;
}


function submitanswer(){
    let answer;
    (input)=>{
        if(input.checked){
            answer = input.value;
        }
    }
    return answer;
}


function reset(){
    ans.forEach((input)=>{
        input.checked = false
    })
}


function end(){
    document.querySelector('.container').innerHTML = 
    `<h2>Sesson Completed</h2></br>
    <h3>You scored ${right}/${total}</h3>`
}


loadquestion();






































// let index=  0;
// let total = quiz.length;
// let right =0,wrong = 0;

// let question = document.querySelector('.question')
// let option = document.querySelectorAll('.option')

// function loadquestion(){


//     if(index === total){
//         return endquiz()
//     }
//     reset()
//     let data = quiz[index];
//     question.innerHTML=`${index+1}) ${data.que}`
//     option[0].nextElementSibling.innerText = data.a;
//     option[1].nextElementSibling.innerText = data.b;
//     option[2].nextElementSibling.innerText = data.c;
//     option[3].nextElementSibling.innerText = data.d;

// }



// document.querySelector('.btn').addEventListener("click",submitquiz)


// function submitquiz(){
//     let data = quiz[index];
//     const ans = submitanswer();
//     if(ans == data.correct){
//         right++
//     }else{
//         wrong++
//     }
//     index++
//     loadquestion();
//     return;
// }

// function submitanswer(){
//     let answer;
//     option.forEach(
//         (input) =>{
//             if(input.checked){
//                 answer = input.value
//             }
//         }
//     )
//     console.log(answer);

//     return answer;
// }

// function reset(){
//     option.forEach(
//         (input)=>{
//             console.log(input.checked)
//             input.checked =false
//         })
// } 

// function endquiz(){
//     document.querySelector('.container').innerHTML = `
//     <h3>You completetd the exam</h3>
//     <h2>Your score is ${right}/${total}</h2>`
// }


// loadquestion();


