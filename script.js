const src = document.querySelector('title').innerText;
const element = document.querySelector('h1');
const colorPicker = document.querySelector("input[type='color']");
const para = document.querySelector('body');

element.innerText = src;
element.classList = 'text';
var background;
var title;
var selectedColor;

// function addClass(){
//     para.style.backgroundColor = "red";
// }
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    selectedColor = event.target.value;
}
function backgroundPicker() {
    background = selectedColor;
}
function titlePicker() {
    title = selectedColor;
}
function applyColor() {
    para.style.backgroundColor = background;
    element.style.color = title;
}