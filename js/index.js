import {
    slotMachine
} from './slotMachine.js';
console.log(slotMachine);

function init() {
    console.log("Init");
    console.log(document);
    // TODO: log the document using console.log to test if you can get access to it        ok   
    console.log(button);
    // TODO: log the submit button. If that works, store that button in a variable       ok
    const button1 = document.querySelector('#button');
    button1.addEventListener ('click', function (){
        console.log ('button clicked');
        pullLever();
    });
    // TODO: attach an event listener to that button and show a log "button clicked"       ok
    // TODO: if the submit button is clicked, the lever is pulled (= call that function)          ok
}

function pullLever() {
    slotMachine.reset();
    // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
    slotMachine.spin();
    // TODO: spin the slot machine
    showSlots();
    // TODO: show slots and win status
    showGameResult();
}

function showSlots() {
    let slots = '';
    for (let i = 0; i < slotMachine.slots.length; i++) {
        slots += '<span class="' + slotMachine.slots[i] + '">' + slotMachine.slots[i] + '</span> ';
        
    };
    document.querySelector('#result').innerHTML = slots;
    // TODO: show the slot symbols in HTML
}

function showGameResult() {
    const statusDiv = document.querySelector('#status');
    statusDiv.innerText = slotMachine.win ? "YOU WIN 🎉💰" : "YOU LOSE 😭🥺";
    // TODO: show a win or lose message in HTML
}

init();