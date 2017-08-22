console.log('Loaded!');

// change text of 'main' div
var element = document.getElementById('main');
element.innerHTML='New Value';

//move the image
var img = document.getElementById('madi');
var moveLeft=0;
function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function(){
   var interval=setInterval(moveRight,100);
};