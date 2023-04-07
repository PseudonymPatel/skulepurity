function makeTestHTML() {
	const text = openQuestionsFile();
	var lines = text.split("\r\n");
	var hhh = "";

	for (i = 0; i < lines.length; i++) {
		hhh += makeLine(lines[i]);
	}

	var qs = document.getElementById("questionspot");
	qs.innerHTML = hhh;
}

function makeLine(item) {
	if (item == "") {
		return "";
	}

	if (item.slice(0,1) == "#") {
		return "<h2>" + item.slice(2) + "</h2>";
	}

	return "<li><div style=\"display: inline-flex;\"><input type=\"checkbox\" class=\"ques\" /><p>" + item + "</p></div></li>";
}

function checkboxes(){
    var inputElems = document.getElementsByClassName("ques");
	console.log(inputElems.length);
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    	if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
        	count++;
    	}
	}
	alert(count);
	return count;
}

function openQuestionsFile() {
	var rawFile = new XMLHttpRequest();
	var allText = "";

	rawFile.open("GET", "/lists/core.txt", false);
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
	return allText;
}


function startTest() {
	makeTestHTML();
}

function calcScore() {
	var score = checkboxes();
	var result = document.getElementById("results");
	document.getElementById("test").style.display = "none";

	result.innerHTML = `
	<h2>Your Score:</h2>
	<p>${score}</p>
	`
}

function clear() {
    var inputElems = document.getElementsByClassName("ques");
	for (var i = 0; i < inputElems.length; i++) {
		inputElems[i].checked = false;
	}
}
