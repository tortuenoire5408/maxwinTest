var num;
var stringArray;
$.getJSON('data2.json', function (data) {
        $.each(data, function(key, val){   
            console.log(val.string);
            console.log(val.delay);
        });
        stringArray = data;
        delayTime();
    });

function delayTime() {
    $("#txt").text(" ");
    $("#txt").attr('scrollamount','0');
    $("#txt").stop();
    console.log("delayTime");
    setTimeout("getDataRestart()", 1000);
}
function getDataRestart(){
    num = Math.floor(Math.random()*stringArray.length);
    $("#txt").text(stringArray[num].string);
    $("#txt").attr('scrollamount','5');
    document.getElementById('txt').start();
    $("#txt").prop('loop','-1');
    // var value = $("#txt").prop('loop');
    // console.log(value);
    // var value = $("#txt").text();
    // console.log(value);
    // var value = $("#txt").attr('scrollamount');
    // console.log(value);
    console.log("getDataRestart");
    setTimeout("changeLoop()", 5000);
}
function changeLoop(){
    $("#txt").prop('loop','1');
    // var value = $("#txt").prop('loop');
    // console.log(value);
    console.log("changeLoop");
    setTimeout("delayTime()", 12000);
}