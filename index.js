function togglePassword() {
  var Spassword = document.getElementById("pwd");
  //Spassword.type = 'password'? "text":"password";

  if (Spassword.type === "password") {
    Spassword.type = "text";
  } else {
    Spassword.type = "password";
  }
}

//Show and hide the requirements for the password
var req = document.getElementById("pwd");

req.onfocus = function () {
  document.getElementById("message").style.display = "block";
};
req.onblur = function () {
  document.getElementById("message").style.display = "none";
};
//Starts type on  the password field and validate the requirements
req.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  var UpperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  letter.classList.toggle("valid", req.value.match(lowerCaseLetters));
  letter.classList.toggle("invalid", !req.value.match(lowerCaseLetters));

  capital.classList.toggle("valid", req.value.match(UpperCaseLetters));
  capital.classList.toggle("invalid", !req.value.match(UpperCaseLetters));

  number.classList.toggle("valid", req.value.match(numbers));
  number.classList.toggle("invalid", !req.value.match(numbers));

  length.classList.toggle("valid", req.value.length >= 8);
  length.classList.toggle("invalid", req.value.length < 8);
};

//Validation .need-validation
/*
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//Show/Hide password
function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
*/
