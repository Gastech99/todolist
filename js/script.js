var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");

addToDoButton.onclick = function () {
  // Vérifier si le input n'est pas vide
  if (inputField.value != "") {
    // S'il n'est pas vide, créer un paragraphe
    var paragraph = document.createElement("p");
  } else {
    alert("Veuillez remplir le champ de texte");
  }
  paragraph.innerText = inputField.value;

  // Ajouter le style au paragraphe
  paragraph.classList.add("paragraphe-style");

  // Insérer le paragraphe dans l'élément container

  toDoContainer.appendChild(paragraph);

  // Vider le input quand le paragragh est ajouté

  inputField.value = "";

  // Barrer le paragraphe quand on clique dessus

  paragraph.addEventListener("click", function () {
    paragraph.classList.add("paragraph-clicked");
  });

  // Supprimer la tache quand on double click

  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
};
