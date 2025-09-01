if (window.location.pathname == "/contact.php") {

  const form = document.getElementsByTagName("form");
  const submitButton = document.querySelector(".submit");
  submitButton.addEventListener("click", onSubmit);
  const prenom = document.querySelector(".prenom").nextElementSibling;
  const nom = document.querySelector(".nom").nextElementSibling;
  const email = document.querySelector(".email").nextElementSibling;
  const textArea = document.querySelector(".textArea");

  function onSubmit(event) {
    event.preventDefault();
    clearErrors()

    cPrenom = checkName(prenom, 1);
    cNom = checkName(nom, 2);
    cEmail = checkEmail(email);
    cTextArea = checkTextArea(textArea);
    if (cPrenom == false || cNom == false || cEmail == false || cTextArea == false) {
      console.log(false)
      return false;
    }
    else {
      const newElement = document.createElement("p");
      newElement.textContent = "Votre message a été envoyé! Merci!";
      newElement.style.color = "green";
      newElement.style.fontSize = "larger";
      newElement.style.textAlign = "center";

      form[0].replaceWith(newElement);
    }
    
  }

  function clearErrors() {
    const prenomError = document.querySelector(".prenomError");
    if (prenomError) {
      prenomError.remove()
    }
    
    const nomError = document.querySelector(".nomError");
    if (nomError) {
      nomError.remove()
    }
    
    const emailError = document.querySelector(".emailError");
    if (emailError)  {
      emailError.remove();
    }

    const commentError = document.querySelector(".commentError");
    if (commentError) {
      commentError.remove();
    }
  }

  function checkName(name, type) {

    const pattern = /^[a-zA-Z]+$/;

    if (pattern.test(name.value)){
      return true;
    }
    else {
      const newElement = document.createElement("div");

      if (type == 1) {
        newElement.classList.add("prenomError");
        newElement.textContent = "Le prénom doit contenir que des lettres.";
      }
      else if (type == 2){
        newElement.classList.add("nomError");
        newElement.textContent = "Le nom doit contenir que des lettres.";
      }
    
      newElement.style.color = "red";
      name.parentElement.appendChild(newElement);

      return false;
    }
  }

  function checkEmail(email) {

    const pattern = /^.*@{1}.*\.{1}.*$/;

    if (pattern.test(email.value)) {
      return true;
    }
    else {
      const newElement = document.createElement("div");
      newElement.classList.add("emailError");
      newElement.textContent = "Le courriel entré est invalid. Format: ______@____.___";
      newElement.style.color = "red";
      email.parentElement.appendChild(newElement);

      return false;
    }
  }

  function checkTextArea(textArea) {
    const pattern = /^.+$/;

    console.log(textArea.value);
    if(pattern.test(textArea.value)) {
      return true;
    }
    else {
      const newElement = document.createElement("div");
      newElement.classList.add("comment");
      newElement.textContent = "Veuillez entrer un commentaire.";
      newElement.style.color = "red";
      textArea.parentElement.appendChild(newElement);

      return false;
    }
  }

}