<?php require 'includes/header.php'; ?>

  <main>
    <h2 class="contacth2">Entrez vos informations.</h1>
    <form action="#" onsubmit="return onSubmit()">
      <fieldset class="who">
        <legend>Qui êtes-vous?</legend>
        
        <label for="prenom" class="prenom">Prénom: </label>
        <input type="text" name="prenom" id="prenom" placeholder="Prénom">
        <label for="nom" class="nom">Nom: </label>
        <input type="text" name="nom" id="nom" placeholder="Nom">
        <label for="email" class="email">Email: </label>
        <input type="text" name="email" id="email" placeholder="email@domain.com">
      </fieldset>

      <fieldset class="raison">
        <legend>Raison de contact?</legend>
        <textarea name="message" id="message" placeholder="Écrire vos commentaires ici." class="textArea"></textarea>
      </fieldset>

      <input class="submit" type="submit" value="Soumettre">
    </form>
  </main>
  
<?php require 'includes/footer.php'; ?>