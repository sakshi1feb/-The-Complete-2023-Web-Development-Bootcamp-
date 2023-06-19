// let alphabet=$(h1).text;
$(document).keypress(function(event){
       $("h1").text("\t"+ event.key);
});
