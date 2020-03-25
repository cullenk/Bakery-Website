/*jshint esversion: 8 */

//Navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display');
});

//Form Prompt



//Form Validation
const textUpdate = document.querySelector('.form-text');
const signUpInfo = document.querySelector('.sign-up-info-container');

function formAnimate() {
  const arrows = document.querySelectorAll('.fa-arrow-down');
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //Check for Validation
      if (input.type === 'text' && validateUser(input)) {
          console.log('Success');
          nextSlide(parent, nextForm);
      } else if (input.type === 'email' && validateEmail(input)) {
          nextSlide(parent, nextForm);
      } else if (input.type === 'password' && validatePass(input)) {
          nextSlide(parent, nextForm);
      } else {
          parent.style.animation = 'shakeMe 0.5s ease';
        }
        // remove animation
      parent.addEventListener('animationend', () => {
        parent.style.animation = '';
      });
    });
  });
}

function validateUser(user) {
  const validation = /^[a-z]{5,}$/;
    if (validation.test(user.value)) {
      textUpdate.innerText = 'Please enter your email address:';
      textUpdate.classList.remove('sign-up-alert');
      return true;
    } else {
      textUpdate.innerText = 'Your username should be at least 5 characters long, use only lowercase letters and no numbers.';
      textUpdate.classList.add('sign-up-alert');
    }
}

function validateEmail(email) {
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validation.test(email.value)) {
        textUpdate.innerText = 'Create a password:';
        textUpdate.classList.remove('sign-up-alert');
        return true;
    } else {
        textUpdate.innerText = 'Please enter a valid email address.';
        textUpdate.classList.add('sign-up-alert');
    }
}

function validatePass(password) {
    const validation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (validation.test(password.value)) {
      textUpdate.innerText = 'Your account has been created!';
      textUpdate.classList.remove('sign-up-alert');
      textUpdate.classList.add('sign-up-success');
      signUpInfo.style.display = 'none';
      return true;
  } else {
       textUpdate.innerText = 'Your password should be at least 8 characters long, have one upper and lowercase letter, and at least one special character.';
       textUpdate.classList.add('sign-up-alert');
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

formAnimate();
