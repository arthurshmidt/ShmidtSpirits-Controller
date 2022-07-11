// dephl_stpt = id

setInterval(update_values, 1000);
var c = 0;
var temp;

console.log("Entered update_values javascript");
// document.getElementById("dephl_stpt").innerHTML = "XX";

function update_values() {
    console.log("Entered update_values function");
    x = Math.floor(Math.random()*100);    
    console.log(x);
//    $("#dephl_stpt").val("xx");
    document.getElementById('dephl_stpt').innerHTML = x.toString();
//    $("#dephl_stpt").val(x.toString());
}

// update_values();
