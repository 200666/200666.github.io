$(document).ready(function() {

  
  $('#spok').click(function() {
  var todo = $(".babySpewk").val();
 
     if(todo===""){
     alert("no");
   }
    else{
    $('ul').append('<li class= "todos" >' + todo + '</li>');
    $("#spewkbuster").val("");
     }
});
  
   //  //function go() {
   //    if(todo==null){
   //   alert("nothing");
   // }
   //  else{
   //  $('ul').append('<li class= "todos" >' + todo + '</li>');
   //  $("#spewkbuster").val("");
   //   }
   // }

   // $('#spok').click(function() {
   //   go();
   // });

  $(document).on('keyup', 'input', function(e) {
     if(e.keyCode == 13) {
       $('#spok').click();
     }
   });

 $(document).on("dblclick","li", function(){

   $(this).fadeOut('slow');

 });

}); //closing bracket for document.ready - DO NOT DELETE EVER