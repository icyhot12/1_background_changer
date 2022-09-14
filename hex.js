const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color-description');

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i=0; i<6; i++){
        random = Math.floor(Math.random()*15);
        hexColor += hex[random];
    }
    color.textContent= hexColor;
    document.body.style.backgroundColor = hexColor;
})