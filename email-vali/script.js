function validation(){
    const emailinput = document.getElementById('emailinput')
    const error = document.getElementById('error')    
    const email = emailinput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.textContent = "Email is invalid"
        return false;
    }
    else{
        error.textContent = "Email is valid"
        return true;
    }
}