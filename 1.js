let el = document.getElementById('enter_form');
el.addEventListener("submit", checkForm);
function checkForm(event){
    event.preventDefault();
    let username = el.UserName.value;
    let pass = el.pass.value;
    let error = "";
    if(username == "" || pass == ""){
        error = "fill in all the fields";
    }
    else if(username.length < 3){
        error = "few characters in the Username";
    }
    else if(pass.length < 7){
        error = "few characters in the Password";
    }
    if(error != ""){
        document.getElementById('error').innerHTML = error;
    }
    else{
        alert("Welcome " + username + "!!!");
        window.location = 'https://speedwagon213.github.io/Wallpapers/';
    }

}
