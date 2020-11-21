let form = document.querySelector('#loginForm');

//ecouter les modification de l'email
form.email.addEventListener('change', function() {
  validEmail(this);
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

