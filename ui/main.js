console.log('Loaded!');

// change text of 'main' div
var element = document.getElementById('main');
element.innerHTML='New Value'

//move the image
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft="100px";
}