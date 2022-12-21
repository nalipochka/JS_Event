//1
function rndNumber() {
    number.innerText = Math.floor(0 + Math.random() * (100 - 0 + 1));
}

//2
function moveMouse(e) {
    cord.innerText = `mouse in: (${e.offsetX};${e.offsetY})`;
}

function clickMouse(e) {
    window.ex2.oncontextmenu = function () { return false }
    switch (e.which) {
        case 1:
            click.innerText = `click: left`;
            break;
        case 2:
            click.innerText = `click: middle`;
            break;
        case 3:
            click.innerText = `click: right`;
            break;
    }
}

//3
function hideShowText() {
    if (hiddenText.hidden) {
        hiddenText.hidden = false;
    }
    else {
        hiddenText.hidden = true;
    }
}

//4
function showTab1(e) {
    target2.style.backgroundColor = "lightseagreen";
    target3.style.backgroundColor = "lightseagreen";
    e.target.style.backgroundColor = "lightgreen";
    visibleText.innerText = "When all your life you did what other people told you to do for your own sake and suddenly the realisation hits you that it led you down a path of unhappiness and it's taking you to a life where you will never be happy but you know if you stray from the path you will face loneliness and a life where it's going also to be very difficult to be happy";
}
function showTab2(e) {
    target1.style.backgroundColor = "lightseagreen";
    target3.style.backgroundColor = "lightseagreen";
    e.target.style.backgroundColor = "lightgreen";
    visibleText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab? Corrupti sapiente, impedit a aspernatur nostrum voluptatum molestias. Assumenda recusandae, unde voluptatibus totam voluptatum velit nemo illo quo fuga tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ab? Corrupti sapiente.";
}
function showTab3(e) {
    target2.style.backgroundColor = "lightseagreen";
    target1.style.backgroundColor = "lightseagreen";
    e.target.style.backgroundColor = "lightgreen";
    visibleText.innerText = "Watching this makes me remember late 2000s and early 2010s, during that time the town where I grew up (capital of my previous country) was just like 80s NY. All those dirty alleys, yappies, a lot of simple things, no propaganda. I was a HS student back then...";
}

//5
// let buttons = document.querySelectorAll(".ex5bth");
// for(let item of buttons){
//     item.onclick = function(event){
//         alert("qwe")
//         event.parentElement.remove();
//     }
// }

function parentRemove(e) {
    e.target.parentElement.remove();
}

//6
function addValueToProgress() {
    if (bar.value == 100)
        bar.value = 0;
    bar.value += 5;
}

//7
enterTd1.onmouseenter = (e) => {
    enterTd1.style.backgroundColor = 'orange';
}
enterTd1.onmouseout = (e) => {
    enterTd1.style.backgroundColor = 'transparent';
}
//-------------------
enterTd2.onmouseenter = (e) => {
    enterTd2.style.backgroundColor = 'orange';
}
enterTd2.onmouseout = (e) => {
    enterTd2.style.backgroundColor = 'transparent';
}
//-------------------
enterTd3.onmouseenter = (e) => {
    enterTd3.style.backgroundColor = 'orange';
}
enterTd3.onmouseout = (e) => {
    enterTd3.style.backgroundColor = 'transparent';
}
//-------------------
enterTd4.onmouseenter = (e) => {
    enterTd4.style.backgroundColor = 'orange';
}
enterTd4.onmouseout = (e) => {
    enterTd4.style.backgroundColor = 'transparent';
}
//-------------------
enterTd5.onmouseenter = (e) => {
    enterTd5.style.backgroundColor = 'orange';
}
enterTd5.onmouseout = (e) => {
    enterTd5.style.backgroundColor = 'transparent';
}
//-------------------
enterTd6.onmouseenter = (e) => {
    enterTd6.style.backgroundColor = 'orange';
}
enterTd6.onmouseout = (e) => {
    enterTd6.style.backgroundColor = 'transparent';
}
//-------------------
enterTd7.onmouseenter = (e) => {
    enterTd7.style.backgroundColor = 'orange';
}
enterTd7.onmouseout = (e) => {
    enterTd7.style.backgroundColor = 'transparent';
}
//-------------------
enterTd8.onmouseenter = (e) => {
    enterTd8.style.backgroundColor = 'orange';
}
enterTd8.onmouseout = (e) => {
    enterTd8.style.backgroundColor = 'transparent';
}
//-------------------
enterTd9.onmouseenter = (e) => {
    enterTd9.style.backgroundColor = 'orange';
}
enterTd9.onmouseout = (e) => {
    enterTd9.style.backgroundColor = 'transparent';
}
//-------------------
enterTd10.onmouseenter = (e) => {
    enterTd10.style.backgroundColor = 'orange';
}
enterTd10.onmouseout = (e) => {
    enterTd10.style.backgroundColor = 'transparent';
}
//-------------------
enterTd11.onmouseenter = (e) => {
    enterTd11.style.backgroundColor = 'orange';
}
enterTd11.onmouseout = (e) => {
    enterTd11.style.backgroundColor = 'transparent';
}
//-------------------
enterTd12.onmouseenter = (e) => {
    enterTd12.style.backgroundColor = 'orange';
}
enterTd12.onmouseout = (e) => {
    enterTd12.style.backgroundColor = 'transparent';
}

//8
noCopyDiv.onmouseenter = (e) => {
    window.noCopyDiv.oncontextmenu = function () { return false }
    e.target.style.userSelect = "none";
}

//9
let isLike = false;
function like(e) {
    if (!isLike) {
        tmp = Number(likeValue.innerText);
        tmp++;
        likeValue.innerText = tmp;
        likeBtn.style.backgroundColor = "rgb(23, 161, 247)";
        isLike = true;
    }
    else {
        tmp = Number(likeValue.innerText);
        tmp--;
        likeValue.innerText = tmp;
        likeBtn.style.backgroundColor = "lightskyblue";
        isLike = false;
    }
}