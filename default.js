
"use strict";

/*var x = 1;
var y = 2;
alert(x + " plus " + y + " equals " + (x + y)); */

/*function $(id) {
    return document.getElementById(id)
}
var leftButton = $("dropButtonLeft");
var leftDrop = $("dropContainerLeft");
var leftLinks = leftDrop.getElementsByTagName("a");
var centerButton = $("dropButtonCenter");
var centerDrop = $("dropContainerCenter");
var centerLinks = centerDrop.getElementsByTagName("a");
var rightButton = $("dropButtonRight");
var rightDrop = $("dropContainerRight");
var rightLinks = rightDrop.getElementsByTagName("a");
*/

var leftButton = document.getElementById("dropButtonLeft");
var leftDrop = document.getElementById("dropContainerLeft");
var leftLinks = leftDrop.getElementsByTagName("a");
var centerButton = document.getElementById("dropButtonCenter");
var centerDrop = document.getElementById("dropContainerCenter");
var centerLinks = centerDrop.getElementsByTagName("a");
var rightButton = document.getElementById("dropButtonRight");
var rightDrop = document.getElementById("dropContainerRight");
var rightLinks = rightDrop.getElementsByTagName("a");

leftDrop.style.visibility = "hidden";
centerDrop.style.display = "none";
rightDrop.style.visibility = "visible";
rightDrop.style.display = "none";

/*
(leftButton, leftDrop).onmouseover = function () {leftDrop.style.visibility = "visible"};
(leftButton, leftDrop).onmouseout = function () {leftDrop.style.visibility = "hidden"};

leftButton.onmouseover = function () {leftDrop.style.visibility = "visible"};
leftButton.onmouseout = function () {leftDrop.style.visibility = "hidden" };
*/

leftButton.onmouseover = function () {leftDrop.style.visibility = "visible";};
leftButton.onmouseout = function () {leftDrop.style.visibility = "hidden";};
leftDrop.onmouseover = function () {leftDrop.style.visibility = "visible";};
leftDrop.onmouseout = function () {leftDrop.style.visibility = "hidden";};

centerButton.onmouseover = function () {centerDrop.style.display = "block"};
centerButton.onmouseout = function () {centerDrop.style.display = "none"};
centerDrop.onmouseover = function () {centerDrop.style.display = "block"};
centerDrop.onmouseout = function () {centerDrop.style.display = "none"};

/*
rightButton.onmouseover = function () {rightDrop.style.visibility = "visible"};
rightButton.onmouseout = function () {rightDrop.style.visibility = "hidden"};
rightDrop.onmouseover = function () {rightDrop.style.visibility = "visible"};
rightDrop.onmouseout = function () {rightDrop.style.visibility = "hidden"};
*/

$("#dropButtonRight").mouseenter(function () {
    $("#dropContainerRight").slideDown("slow");
});

