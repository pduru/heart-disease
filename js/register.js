document.getElementById("register-form").addEventListener("submit",registerUser);
function registerUser(e){


    let userName = document.getElementById("orangeForm-name").value;
    let emailVal = document.getElementById("defaultForm-email").value;
    let passwordVal = document.getElementById("defaultForm-pass").value;
    
    localStorage.setItem("username",userName);
    localStorage.setItem("email",emailVal);
    localStorage.setItem("password", passwordVal);

    alert("Registration successful")
    window.location.assign("file:///C:/Users/pduru/Desktop/fuzzy/index.html");

    e.preventDefault();
    
}