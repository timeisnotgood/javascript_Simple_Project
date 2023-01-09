let openbtn = document.getElementById('open-btn');
let modalcontainer = document.getElementById('modal-container');
let closebtn = document.getElementById('close-btn');


openbtn.addEventListener("click",function(){
    modalcontainer.style.display = 'block';

});


closebtn.addEventListener("click",function(){
    modalcontainer.style.display = 'none';
})

