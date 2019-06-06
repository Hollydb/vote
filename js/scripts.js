$(document).ready(function(){
  console.log ("Jquery is loaded");
  $("form#age-form").submit(function(event){
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

  $("form#address-form").submit(function(event){
    event.preventDefault()
    var address = $("#addressInput").val();
    if (address <= 49999){
      $(".east").show();
      $(".mid").hide();
      $(".west").hide();
    } else if (address >= 50000 && address <= 89999) {
      $(".mid").show();
      $(".east").hide();
      $(".west").hide();
    } else {
      $(".west").show();
      $(".east").hide();
      $(".mid").hide();
    }
  });
});
