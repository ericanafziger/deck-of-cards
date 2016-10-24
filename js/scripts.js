
$(document).ready(function(){
  var cardValues = ["ace", "jack", "queen", "king"];
  var SuitedCards =[];

  for (i=10; i>1; i--) {
    console.log(i);
    cardValues.splice(1,0,i);
  }
  cardValues.forEach(function(card) {
    SuitedCards.push(card+" of spades");
    SuitedCards.push(card+" of clubs");
    SuitedCards.push(card+" of diamonds");
    SuitedCards.push(card+" of hearts");


  });
  console.log(SuitedCards);

  //shuffles cards below

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
    shuffleArray(SuitedCards);

  // var shuffledCards = shuffle(SuitedCards);
  // console.log(shuffledCards);
});
