var number;
var striArray;
$.getJSON('data.json', function (data) {
        $.each(data, function(key, val){   
            console.log(val.string);
        });
        striArray = data;
        getDataMoveIn();
    });
function getDataMoveIn(){
    number = Math.floor(Math.random()*striArray.length);
    $("#marqueeText").text(striArray[number].string);
    $("#marqueeText").css("visibility","visible");
    $("#marqueeText").css("top","5");
    setTimeout("getDataMoveOut()", 3500);
}
function getDataMoveOut(){
    $("#marqueeText").css("visibility","hidden");
    $("#marqueeText").css("top","30");
    setTimeout("reset()", 500);
}
function reset(){
    $("#marqueeText").css("top","-20");
    setTimeout("getDataMoveIn()", 500);
}
