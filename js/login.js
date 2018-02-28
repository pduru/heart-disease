document.getElementById("login-form").addEventListener('submit',processLogin);

function  processLogin(e){
    
    let emailId = document.getElementById("defaultForm-email").value;
    let passwordVal = document.getElementById("defaultForm-pass").value;
    let localEmail = localStorage.getItem("email");
    let localPassword = localStorage.getItem("password");
    if(emailId == localEmail && passwordVal == localPassword){
        window.location.assign("file:///C:/Users/pduru/Desktop/fuzzy/evaluate.html")
    }
    else{
        document.getElementById("info").innerHTML = "Username or Password Incorrect";
    }
    e.preventDefault();
}
