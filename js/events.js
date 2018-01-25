//define functions here
function getIt(){
  $('p').on('click', function(e){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(e){
    
  })
}
function pressIt(){
  $('input').on('keydown', function(e){
    if (e.which === 71){
      alert("You have pressed G!");
    }
  })
}
$(document).ready(function(){

// call functions here

});
