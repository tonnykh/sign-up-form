
function passwordPattern() {
    password = document.getElementById("password");
    confirm_password = document.getElementById("confirm_password");
    return confirm_password.pattern = password.value;
}

function showPassword() {
    let have_password = document.querySelectorAll(".show");

    for (let i = 0; i < have_password.length; i++ ) {
        if (have_password[i].type === "password") {
            have_password[i].type = 'text';
        } else {
            have_password[i].type = 'password';
        }
    }
}