$(document).ready(
    function task(){
     getClockJS();
     getDataJS();
     getData2JS();
        // setInterval("getClockJS()", 1000);
        // setInterval("getDataJS()", 5000);
    }
)
function getClockJS(){
    $.getScript("getClock.js", function(data){
        console.log("load getClock.js");
        });
    // setTimeout("getClockJS()", 1000);    
};
function getDataJS(){
    $.getScript("getData.js", function(data){
        console.log("load getData.js");
        });
    // setTimeout("getDataJS()", 5000);    
}; 
function getData2JS(){
    $.getScript("getData2.js", function(data){
        console.log("load getData2.js");
        });
    // setTimeout("getDataJS()", 5000);    
}; 