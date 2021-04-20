//Login

var usuario = document.querySelector("[data-input=\"usuario\"]")

var contra = document.querySelector("[data-input=\"contra\"]")

var login_btn = document.querySelector("[data-login-btn]")

var users = [];

function cargar_usuarios(){
    users = JSON.parse(localStorage.getItem("users"));
    
}

function login () {
    cargar_usuarios()
    var us = usuario.value
    var co = contra.value
    if(users===null)
    {
       users = [];
    }
    else 
    {
        users.forEach(element => {
            if(element.username == us && element.pass == co){
                var f_name = element.realname
                var l_name = element.last_name
                var u_name = element.username
                cargar_usuario(f_name,l_name,u_name)
               window.location.href = "Dashboard.html";
                
            }
        });
    }
    
    
}

function cargar_usuario(f_name, l_name, u_name){
    sessionStorage.setItem("fname", f_name);
    sessionStorage.setItem("lname", l_name);
    sessionStorage.setItem("uname", u_name);
}

login_btn.onclick = login
