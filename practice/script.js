
function patter1(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1; j<=n;j++){
      patern += "* "
    }
    console.log(patern);
  }
}

function patter2(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '

    
    for(let j =1; j<=i;j++){
      patern += "* "
    }
    console.log(patern);
  }
}

function patter3(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1; j<=i;j++){
      patern += j
    }
    console.log(patern);
  }
}

function patter4(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1; j<=i;j++){
      patern += i
    }
    console.log(patern);
  }
}

function patter5(n){
  for (let i =0 ; i<n;i++){
    let patern = ' '
    for(let j =1; j<=n-i;j++){
      patern += "* "
    }
    console.log(patern);
  }
}

function patter6(n){
  for (let i =0 ; i<n;i++){
    let patern = ' '
    for(let j =1; j<=n-i;j++){
      patern += j
    }
    console.log(patern);
  }
}

function patter7(n){
  for (let i =0 ; i<n;i++){
    let patern = ""
    for(let o = 0; o<n-i-1;o++){
      patern += "  "
    }
    for(let j =1; j<= 2 * i+1 ;j++){
      patern += " *"
    }
    console.log(patern);
  }
}

function patter8(n){
  for (let i =0 ; i<n;i++){
    let patern = ''
    let m = 2 * i +1
    for(let s = 1; s<=i;s++){
      patern += "  "
    }
    for(let j =1; j<=2*n-m;j++){
      patern += " *"
    }
    console.log(patern);
  }
}

function patter9(n){
  patter7(n)
  patter8(n)
}

function patter10(n){
  for (let i =1 ; i<n;i++){
    let alter = i
    let patern = ' '
    if(i > 5 ){
      alter = n -i
    }
    for(let j =1; j<= alter;j++){
      patern += "*"

    }
    console.log(patern);
  }
}

function patter11(n){
  for (let i =0 ; i<n;i++){
    let patern = ' '
    let start = 0
    if(i % 2 ==0) start = 0
    else start = 1
    for(let j =0 ; j<=i ;j++){
      start = 1- start
      patern += start
    }
    console.log(patern);
  }
}


function patter12(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1 ; j<=i ;j++){
      patern += j
    }

    let space = 2 *n -i-i
    for(let s = 1;s<=space;s++){
      patern += " "
    }

    for(let k = 1;k<=i;k++){
      let n = i-k+1
      patern += n
    }
    console.log(patern);
  }
}


function patter13(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    let start = 1
    if( i == 4) start = 3
    else if ( i==5) start =6

    for(let j = 0;j<i;j++){
      if(i > 2){
        patern += i+j+start
      }else{
      patern += i+j
      }
    }
    console.log(patern);
  }
}

function patter14(n){
  for(let i =0;i<n;i++){
    let patern = ' '
    for(let j=0;j<=i;j++ ){
      let a = ["A","B","C","D","E"]
      patern += a[j]
    }
    console.log(patern);
  }
}

function patter15(n){
  for(let i =0;i<=n;i++){
    let patern = ' '
    for(let j=0;j<=n-i;j++ ){
      let a = ["A","B","C","D","E"]
      patern += a[j]
    }
    console.log(patern);
  }
}

function patter16(n){
  for(let i =0;i<=n;i++){
    let patern = ' '
    for(let j=0;j<=i;j++){
      let a = ["A","B","C","D","E"]
      patern += a[i]
    }
    console.log(patern);
  }
}

function patter17(n){

  for(let i = 0;i<n;i++){
    let patern = ' '

    for(let s = 0;s <=n-i;s++){
      patern += " "
    }
    for(let j=0;j<=i;j++){
      let a = ["A","B","C","D","E"]
      patern += a[j]
    }

    for(let a = 1;a<=i;a++){
      let arr = ["A","B","C","D","E"]
      patern += arr[i-a] 
    }
    console.log(patern);
  }

}

function patter18(n){

  for(let i = 0;i<n;i++){
    let patern = ' '
    let arr = ["A","B","C","D","E"]
    for(let j =0;j<=i;j++ ){
      patern += arr[4-i+j]
    }
    console.log(patern);
  }

}

function patter19(n){

  for(let i = 1;i<=n;i++){
    let patern = ' '

    // start
    for(let j =1;j<=n-i+1;j++ ){
      patern += "*"
    }
    
    // Space
    for(let s =1;s<=i-1;s++){
      patern += "  "
    }

    //start
    for(let j =1;j<=n-i+1;j++ ){
      patern += "*"
    }
    console.log(patern);
  }

  //down 
  for(let i = 1;i<=n;i++){
    let patern =' '
    //start
    for(let one = 1;one<=i;one++){
      patern += "*"
    }
    //space
    for(let two = 1;two<=n-i;two++){
      patern += "  "
    }
    //start
    for(let three = 1;three <= i;three++){
      patern += "*"
    }
    console.log(patern);
  }

}

function patter20(n){

  for(let i = 1;i<n*2;i++){
    let patern = ' '

    //start
    let alt = i
    if(i>5) alt = n*2 -i
    for(let j =1;j<=alt;j++ ){
      patern += "*"
    }

    //space
    let spa = n*2 - i*2
    if(i > 5) spa = i*2 - n*2
    for(let s =1;s<=spa;s++ ){
      patern += " "
    }

    //start
    for(let j =1;j<=alt;j++ ){
      patern += "*"
    }

    console.log(patern);
  }

}

function patter21(n){

  for(let i = 0;i<n;i++){
    let patern = ' '
    for(let j =0;j<i;j++ ){
      if( i==0 || j== 0 || i == n-1 || j == n-1){
        patern += i
      }else{
        patern += " "
      }
    }
    console.log(patern);
  }

}



const data = [
  {
    "name": "Page A",
    "pv": 2400
  },
  {
    "name": "Page B",
    "pv": 1398
  },
  {
    "name": "Page C",
    "pv": 9800
  },
  {
    "name": "Page D",
    "pv": 3908
  },
  {
    "name": "Page E",
    "pv": 4800
  },
  {
    "name": "Page F",
    "pv": 3800
  },
  {
    "name": "Page G",
    "pv": 4300
  }
]

// console.log(data);

// let arr = data
// let len = arr.length;

// for (let i = 0; i < len; i++) {
//   for (let j = 0; j < len - i - 1; j++) {
//     if (arr[j].pv > arr[j + 1].pv) {
//       // Swap the values if they are in the wrong order
//       let temp = arr[j].pv;
//       arr[j].pv = arr[j + 1].pv;
//       arr[j + 1].pv = temp;
//       console.log(arr);
//     }
//   }
// }


// for(let a = 0;a<5;a++){
//   let c = n.valueOf(a)/a
//   console.log(c);
// }



let num = 12345
let st = num.toString()
// console.log(st.length);

function reverser(n){
  let num = ' '
  for(let a = 0;a <5;a++){
    num += n-a
  }
  console.log(num);
}

reverser(st.length)

