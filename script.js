//password value for random function
let passwordValues ={
    0:"ABCDEFGHJKMNPQRSTUVWXYZ",
    1:"abcdefghjkmnpqrstuvwxyz",
    2:"234567890",
    3:"!@#$%&"
}



// button click functions
document.getElementById("passbutton").addEventListener("click",copied);
document.getElementById("button").addEventListener('click',startcheck);

//dom references
let checkboxes = document.getElementsByClassName("checkboxx"); // for checkboxes
let selectbox = document.getElementById("passwordnum"); // for select box
let passwordans = document.getElementById("passans"); // for putting password

//function for the numbers in select box
var select = '';
for (i=4;i<=100;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
document.getElementById('passwordnum').innerHTML=select;
//ends here select box..

//to copy the text in the password field
function copied() {
    var copyText = document.getElementById("passans");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
  }

//check which boxes are checked and return to password function
function startcheck(){  
    let passwordletters = "";
    for(let i=0;i<4;i++){
        if (checkboxes[i].checked){
            passwordletters += passwordValues[i];
        }
        console.log(checkboxes[i].checked);
    }
    password(passwordletters,selectbox.value);
}

//function to join
function password(letters,no){
    var result = "";
    for(var i=0;i<no;i++){
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    passwordans.value = result;
}





