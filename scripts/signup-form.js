const pswd = document.querySelector("#password")
const pswdConfirm = document.querySelector("#password-confirm")

function pswdMatch(){
    let pswdText = pswd.value;
    let pswdConfirmText = pswdConfirm.value;
    if(pswdText.length === 0 || pswdConfirmText.length === 0){
        hidePswdMismatch();
        return;
    }
    if(pswdText != pswdConfirmText){
        showPswdMismatch();
        return;
    }
    hidePswdMismatch();
}

function hidePswdMismatch(){
    pswdConfirm.setCustomValidity("");
    pswdConfirm.checkValidity();
}

function showPswdMismatch(){
    pswdConfirm.setCustomValidity("Passwords do not match");
    pswdConfirm.checkValidity();
}

pswd.addEventListener("keyup", pswdMatch);
pswdConfirm.addEventListener("keyup", pswdMatch);