$("document").ready(function(){
    
    var initial = false;
    if(!initial){
        $("#about").css("top", "-999px");
        $("#portfolio").css("top", "999px");
    }
    
    $(".about").click(function(){
        
        initial = true;
        $("#about").animate({top:"0px"}, 500);
        
        $("#home").click(function(){
            $("#about").animate({top:"-999px"}, 500);
        });
        
        initial = false;
    });
    
    $(".portfolio").click(function(){
        
        initial = true;
        $("#portfolio").animate({top:"0px"}, 500);
        
        $("#portHome").click(function(){
            $("#portfolio").animate({top:"999px"}, 500);
        });
        
        initial = false;
    });
});