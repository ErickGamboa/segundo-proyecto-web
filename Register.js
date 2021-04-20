
//Register


var realname = document.querySelector("[data-input=\"realname\"]")

var last_name = document.querySelector("[data-input=\"last-name\"]")

var phone_nu = document.querySelector("[data-input=\"nu-phone\"]")

var username = document.querySelector("[data-input=\"username\"]")

var pass = document.querySelector("[data-input=\"pass\"]")

var re_pass = document.querySelector("[data-input=\"re-pass\"]")

var register_btn = document.querySelector("[data-register-btn]")



function register () {
    //TODO: validate all inputs
    var user ={
        realname: realname.value,
        last_name: last_name.value,
        phone_nu: phone_nu.value,
        username: username.value,
        pass: pass.value,
    }
    var all_users = JSON.parse(localStorage.getItem("users")) || [];
    all_users.push(user)
    localStorage.setItem("users", JSON.stringify(all_users))
}
register_btn.onclick = register























