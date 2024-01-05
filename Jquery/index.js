
    $("h1").addClass("big-font");
    $('button').text("show less")
    $("h1").html("angela")
    $('a').attr("href","https://www.google.com")
    var buttonText= "show less";
    $("button").click(function(event){
        
        if(buttonText=="show less"){
            $("button").text("show more");
            buttonText="show more";
        }else{
            $("button").text("show less");
            buttonText= "show less"
        }
        $("h1").animate({margin:20})});
    