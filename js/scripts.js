$(document).ready(function(){
  console.log ("Jquery is loaded");
  $("form").submit(function(event){
    event.preventDefault()
    var age = parseInt($('#ageInput').val());
  if (age>=18){
    $('#over18').show();
    $('#under18').hide();
} else {
    $('#under18').show();
    $('#over18').hide();
  }
});
});
