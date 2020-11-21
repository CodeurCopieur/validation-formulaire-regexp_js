let form = document.querySelector('#loginForm');

//ecouter les modification de l'email
form.email.addEventListener('change', function() {
  validEmail(this);
})

//ecouter les modification du password
form.password.addEventListener('change', function() {
  validPassword(this);
})

/************* Validation email ************/
const validEmail = function(email){
  //Création de la regexp pour la validation email
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  //On récupère la balise small
  let small =  email.nextElementSibling;

  //On test l'expréssion régulière
  if(emailRegExp.test(email.value)) {
    small.textContent = 'Adresse valide';
    small.classList.remove('text-danger');
    small.classList.add('text-success');
  } else {
    small.textContent = 'Adresse n\'est pas valide';
    small.classList.remove('text-sucess');
    small.classList.add('text-danger');
  }
}


/************* Validation password ************/
const validPassword = function(password){
  let msg;
  let valid = false;
  
  //au moins 3 caractères
  if(password.value.length < 3) {
     msg = 'Le mot de passe doit contenir au moins 3 caractères';
  }
  //au moins 1 maj
  else if(!/[A-Z]/.test(password.value)) {
     msg = 'Le mot de passe doit contenir au moins 1 majuscule';
  }
  //au moins 1 min
  else if(!/[a-z]/.test(password.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 minuscule';
  }
  //au moins chiffre
  else if(!/[0-9]/.test(password.value)) {
    msg = 'Le mot de passe doit contenir au moins 1 chiffre';
  }
  //mot de passe valide
  else {
    msg = 'Le mot de passe est valide';
    valid = true;
  }

  //afficher le message
  //On récupère la balise small
  let small =  password.nextElementSibling;

  //On test l'expréssion régulière
  if(valid) {
    small.textContent = 'Le mot de passe est valide';
    small.classList.remove('text-danger');
    small.classList.add('text-success');
  } else {
    small.textContent = msg;
    small.classList.remove('text-sucess');
    small.classList.add('text-danger');
  }
}