$(document).ready(function () {
  $("#contact_form")
    .bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh",
      },
      fields: {
        first_name: {
          validators: {
            stringLength: {
              min: 2,
            },
            notEmpty: {
              message: "Please supply your first name",
            },
          },
        },
        last_name: {
          validators: {
            stringLength: {
              min: 2,
            },
            notEmpty: {
              message: "Please supply your last name",
            },
          },
        },
        email: {
          validators: {
            notEmpty: {
              message: "Please supply your email address",
            },
            emailAddress: {
              message: "Please supply a valid email address",
            },
          },
        },
        phone: {
          validators: {
            notEmpty: {
              message: "Please supply your phone number",
            },
            phone: {
              country: "US",
              message: "Please supply a vaild phone number with area code",
            },
          },
        },
        address: {
          validators: {
            stringLength: {
              min: 8,
            },
            notEmpty: {
              message: "Please supply your street address",
            },
          },
        },
        city: {
          validators: {
            stringLength: {
              min: 4,
            },
            notEmpty: {
              message: "Please supply your city",
            },
          },
        },
        state: {
          validators: {
            notEmpty: {
              message: "Please select your state",
            },
          },
        },
        zip: {
          validators: {
            notEmpty: {
              message: "Please supply your zip code",
            },
            zipCode: {
              country: "US",
              message: "Please supply a vaild zip code",
            },
          },
        },
        comment: {
          validators: {
            stringLength: {
              min: 10,
              max: 200,
              message:
                "Please enter at least 10 characters and no more than 200",
            },
            notEmpty: {
              message: "Explain why you want to add a family member?",
            },
          },
        },
      },
    })
    .on("success.form.bv", function (e) {
      $("#success_message").slideDown({ opacity: "show" }, "slow"); // Do something ...
      $("#contact_form").data("bootstrapValidator").resetForm();

      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data("bootstrapValidator");

      // Use Ajax to submit form data
      $.post(
        $form.attr("action"),
        $form.serialize(),
        function (result) {
          console.log(result);
        },
        "json"
      );
    });
});
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
