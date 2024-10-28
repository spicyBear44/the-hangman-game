import wordLists from './word-list.js';


function loop() {
    const alphaBets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const btnsDiv = document.querySelector('.btns');

    for(let i = 0; i < alphaBets.length; i++ ) {
        const btn = document.createElement('button');
        btn.textContent = alphaBets[i];
        btnsDiv.appendChild(btn);
    }
}

loop();