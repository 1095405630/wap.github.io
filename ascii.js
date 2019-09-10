window.onload = function() {
    this.document.getElementById("start").onclick = this.startAction;
    this.document.getElementById("stop").onclick = this.stopAction;
    this.document.getElementById("turbo").onclick = this.checkboxAction;
    this.document.getElementById("fontsize").onclick = this.changeFontAction;
}

function startAction() {
    
}

function stopAction() {

}

function checkboxAction() {

}

function changeFontAction() {
    var fontSelect = document.getElementById("fontsize");
    if (fontSelect.options[0].selected == true) {
        changeFontSize(7);
    } else if (fontSelect.options[1].selected == true) {
        changeFontSize(10);
    } else if (fontSelect.options[2].selected == true) {
        changeFontSize(12);
    } else if (fontSelect.options[3].selected == true) {
        changeFontSize(16);
    } else if (fontSelect.options[4].selected == true) {
        changeFontSize(24);
    } else {
        changeFontSize(32);
    }
}

function changeFontSize(size) {
    document.getElementById("text-area").style.fontSize = size + 'pt';
}

function animationAction() {
    
}