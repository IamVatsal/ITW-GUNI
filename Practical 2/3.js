let user = prompt("Enter User Name");
if (user == "admin") {
    let pass = prompt("Enter Password");
    if (pass == "TheMaster") {
        alert("Welcome Admin");
    } else if(user = null || user == "" || user == undefined) {
        alert("Cancelled");
    }else{
        alert("Incorrect Password");
    }
}   