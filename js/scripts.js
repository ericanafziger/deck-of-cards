$(document).ready(function(){
  var cardValues = ["ace", "jack", "queen", "king"];
  for (i=10; i>1; i--) {
    console.log(i);
    cardValues.splice(2,0,i);
    console.log(cardValues);
  }


});
