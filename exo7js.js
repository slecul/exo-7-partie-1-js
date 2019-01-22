function valeur() {
  var pointure = document.getElementById('firstNumber').value;
  var naissance = document.getElementById('secondNumber').value;
  var result = (((pointure*2)+5)*50-naissance)+1766;
  alert(result);
}
