document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4 px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    var leftArm = document.getElementById("leftarm");
    leftArm.addEventListener("click", moveRightLeft);

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}

function moveLeftRight(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    var leftArm = document.getElementById("leftarm");
    leftArm.addEventListener("click", moveRightLeft);

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10)

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);

        }

    }


}