$(document).ready(function(){
  console.log ("Jquery is loaded");
  var age= parseInt(prompt("How old are you?"));
  if (age>=18){
    $('#over18').show();
} else {
    $('#under18').show();
  }
});
