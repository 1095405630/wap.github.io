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

function translate(str) {
    if (str.length == 0) return str;
    var temp = str.replace('\t\t', '');
    temp = temp.replace(' ', '');
    if (temp.length == 0) return str;
    if (/^[a-zA-Z]+$/.test(temp) == false) return str;
    if (typeof(str) === 'number' && !isNaN(str)) return str;
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    if (vowel.indexOf(str.substr(0,1)) !== -1) {
        return str + 'ay';
    }
    while (vowel.indexOf(str.substr(0,1)) == -1) {
        str = str.substr(1) + str.substr(0,1);
    }
    return str + 'ay';
}

function pigLatin() {
    var text = document.getElementById('textArea').innerHTML;
    var textArr = text.split(' ');
    var finalArr = [];
    for (let i = 0; i < textArr.length; i++) {
        var tr = translate(textArr[i]);
        finalArr.push(tr);
    }
    var finalText = finalArr.join(' ');
    document.getElementById('textArea').innerHTML = finalText;
}

function changeWords() {
    var text = document.getElementById('textArea').innerHTML;
    var textArr = text.split(' ');
    var replaceArr = [];
    for (let i = 0; i < textArr.length; i++) {
        if (checkWords(textArr[i]).length >= 5) {
            replaceArr.push(textArr[i]);
        }
    }
    for (let i = 0; i < replaceArr.length; i++) {
        text = text.replace(replaceArr[i], 'Malkovich');
    }
    document.getElementById("textArea").innerHTML = text;
}

function checkWords(str) {
    if (str.length == 0) return '';
    var temp = str.replace('\t\t', '');
    temp = temp.replace(' ', '');
    if (temp.length == 0) return '';
    if (/^[a-zA-Z]+$/.test(temp) == false) return '';
    if (typeof(str) === 'number' && !isNaN(str)) return '';
    return str;
}