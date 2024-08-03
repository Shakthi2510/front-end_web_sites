var p0 = document.getElementsByClassName("p0")[0];
var hide = document.getElementsByClassName("hide")[0];
var next=document.getElementsByClassName("next")[0];
var next1=document.getElementsByClassName("next1")[0];
var next2=document.getElementsByClassName("next2")[0];
var next3=document.getElementsByClassName("next3")[0];
var hi1=document.getElementsByClassName("hi1")[0];
var hi2=document.getElementsByClassName("hi2")[0];
var hi3=document.getElementsByClassName("hi3")[0];
var hp1=document.getElementsByClassName("hp1")[0];
var hp2=document.getElementsByClassName("hp2")[0];
var hp3=document.getElementsByClassName("hp3")[0];
var left1=document.getElementsByClassName("left1")[0];
var left2=document.getElementsByClassName("left2")[0];
var left3=document.getElementsByClassName("left3")[0];
var phonee1=document.getElementsByClassName("phonee1")[0];
var phonee2=document.getElementsByClassName("phonee2")[0];
var phonee3=document.getElementsByClassName("phonee3")[0];
var phoneee1=document.getElementsByClassName("phoneee1")[0];
var phoneee2=document.getElementsByClassName("phoneee2")[0];
var phoneee3=document.getElementsByClassName("phoneee3")[0];
p0.onclick = function() {
    hide.style.display = "flex";
};
next.onclick = function() {
    hi1.style.display = "none";
    hi2.style.display="flex";
    hi3.style.display = "none";
};
next1.onclick = function() {
    hi1.style.display = "none";
    hi2.style.display = "none";
    hi3.style.display = "flex";
};
next2.onclick = function() {
    hi1.style.display = "flex";
    hi2.style.display = "none";
    hi3.style.display = "none";
};
left1.onclick = function() {
    hi1.style.display = "none";
    hi2.style.display = "none";
    hi3.style.display = "flex";
};
left2.onclick = function() {
    hi1.style.display = "flex";
    hi2.style.display = "none";
    hi3.style.display = "none";
};
left3.onclick = function() {
    hi1.style.display = "none";
    hi2.style.display = "flex";
    hi3.style.display = "none";
};
phonee1.onclick = function() {
    hp1.style.display = "none";
    hp2.style.display = "block";
    hp3.style.display = "none";
};
phonee2.onclick = function() {
    hp1.style.display = "none";
    hp2.style.display = "none";
    hp3.style.display = "block";
};
phonee3.onclick = function() {
    hp1.style.display = "block";
    hp2.style.display = "none";
    hp3.style.display = "none";
};
phoneee1.onclick = function() {
    hp1.style.display = "none";
    hp2.style.display = "block";
    hp3.style.display = "none";
};
phoneee2.onclick = function() {
    hp1.style.display = "none";
    hp2.style.display = "none";
    hp3.style.display = "block";
};
phoneee3.onclick = function() {
    hp1.style.display = "block";
    hp2.style.display = "none";
    hp3.style.display = "none";
};
