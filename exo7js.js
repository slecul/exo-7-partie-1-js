//Déclaration de la fonction.
function weirdcalcul() {
  // On récupère les valeurs entrées par l'utilisateur.
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //Si les entrées ne sont pas des nombres, on préviens l'utilisateur.
  if (isNaN(shoeSize) && isNaN(yearOfBirth)){
    alert('Vous n\'avez pas entré de nombres');
    //Sinon, on effectue le calcul chelou.
  }else{
    //MAIS avant de faire le calcul, on vérifie que les entrées sont cohérentes avec un humain normalement constitué: pointure entre 34 et 55 ET date de naissance entre 1900 et 2019.
    if((shoeSize <= 34 || shoeSize >= 55) || (yearOfBirth <= 1900 || yearOfBirth >= 2019)){
      alert('Les entrées ne correspondent pas a un adulte vivant');
    // ENFIN , si TOUTES les conditions sont remplies, on fait le fâmeux calcul.
    }else{
    alert(((shoeSize*2+5)*50-yearOfBirth)+1766);
    }
  }
}
