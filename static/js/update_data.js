// dephl_stpt = id

// Constants
const DATA_FILE = "/static/data/test.json";
var CHANGE_VALUE = 100;

setInterval(update_values, 2000);
var c = 0;
var temp;

// Read in data & Convert to JSON
console.log("Reading JSON file");
$.getJSON( DATA_FILE, function(data) {
//    console.log(JSON.stringify(data));
    data_json = data;
    console.log("value in read json");
    console.log(CHANGE_VALUE);
    CHANGE_VALUE = 999;
    console.log("value change in read json");
    console.log(CHANGE_VALUE);
});

console.log("value change outside of read json");
console.log(CHANGE_VALUE);

console.log("printing data_json");
console.log(JSON.stringify(window.data_json));
// var fr = new FileReader();
// var data_string = fr.readAsText(DATA_FILE);
// var data_json = JSON.parse(data_string);
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
