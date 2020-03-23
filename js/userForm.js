/*jshint esversion: 8 */

//Navbar Toggle

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display');
});

//Form Validation

const infoText = document.querySelector('.container');
const textUpdate = document.querySelector('h5');
const header = document.querySelector('h3');

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
      infoText.style.marginTop = '250px';
      textUpdate.innerText = 'Please enter your email address';
      return true;
    } else {
      // infoText.style.marginTop = '190px';
      textUpdate.innerText = 'Your username should be at least 5 characters long, use only lowercase letters and no numbers.';
      statusColor('rgb(189,87,87)');
    }
}

function validateEmail(email) {
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validation.test(email.value)) {
        textUpdate.innerText = 'Create a password';
        return true;
    } else {
        textUpdate.innerText = 'Please enter a valid email address.';
        statusColor('rgb(189,87,87)');
    }
}

function validatePass(password) {
    const validation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (validation.test(password.value)) {
      // document.body.style.backgroundColor = 'rgb(53, 170, 112)';
      infoText.style.marginTop = '250px';
      header.style.opacity = '0';
      textUpdate.innerText = 'Your account has been created!';
      return true;
  } else {
       infoText.style.marginTop = '190px';
       textUpdate.innerText = 'Your password should be at least 8 characters long, have one upper and lowercase letter, and at least one special character.';
       statusColor('rgb(189,87,87)');
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function statusColor(color) {
    textUpdate.style.color = color;
    window.setTimeout(function() {
    textUpdate.style.color = 'red';
  },1200);
}
formAnimate();
