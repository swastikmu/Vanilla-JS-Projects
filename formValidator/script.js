var form = document.getElementById('form');
var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var password2 = document.getElementById('password2');

function showError(input , message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.className = 'form-control.error';
    small.innerHTML = message;
}

function showSuccess(username){
    const formControl = username.parentElement;
    formControl.className = 'form-control success'; 
}


function checkRequired(inputArr) {
    
    inputArr.forEach(function(input){
        console.log(input.value);
        if (input.value.trim() === '') {
            showError(input , `${input.id} is required`)
        }
        else{
    showSuccess(input);
    }
    })
}

form.addEventListener('submit', function(e){
e.preventDefault(); //this prevents the form from submitting and allows the data to get post
console.log('submit');

// if (username.value === '') {
//    showError(username, 'Username is requried');
// }
// else{
//     showSuccess(username);
// }


// if (email.value === '') {
//     showError(email, 'Email is requried');
//  }
//  else{
//      showSuccess(email);
//  }



//  if (password.value === '') {
//     showError(password, 'password is requried');
//  }
//  else{
//      showSuccess(password);
//  }


//  if (password2.value === '') {
//     showError(password2, 'Confirm Pasword is requried');
//  }
//  else{
//      showSuccess(password2);
//  }

checkRequired([username, email, password , password2]);

});