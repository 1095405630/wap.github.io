alert("Hello, world!");
function helloworld() {
    // alert("Hello, world!");
    // document.getElementById("textArea").style.fontSize = "24pt";
    
    if ($(checkBox).attr("checked")) {
        // document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "green";
        document.getElementById("textArea").style.textDecoration = "underline";
    } else {
        // document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style.textDecoration = "none";
    }

    window.setInterval(addFontSize, 500);
    
}

function addFontSize() {
    // var size = parseInt(window.getComputedStyle(document.getElementById('textArea'), null).getPropertyValue('font-size'));
    var size = parseInt($('#textArea').css('font-size'));
    document.getElementById("textArea").style.fontSize = size + 2 + "px";
}

function blingChecked() {
    document.body.style.background="url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg) no-repeat";
   }