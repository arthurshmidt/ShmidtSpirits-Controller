// dephl_stpt = id

// Constants
const DATA_FILE = "/static/js/test.json";

setInterval(update_values, 2000);
var c = 0;
var temp;
var data_json;

// Read in data & Convert to JSON
console.log("Reading JSON file");
$.getJSON(DATA_FILE, (data) => {
    console.log(data);
});
//var fr = new FileReader();
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
