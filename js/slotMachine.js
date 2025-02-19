export const slotMachine = {
    calculateStatus: function () {
        this.win = this.slots.every(symbol => symbol === this.slots[0]);  
    },

    getRandomSymbol: function () {
        const index = Math.floor(Math.random() * 4);  
        return this.symbols[index];
    },

    reset: function () {
        this.slots = [];  
        this.win = false; 
    },

    symbols: ["♠", "♥", "♣", "♦"],  
    slots: [],  
    slotsAmount: 3, 
    spin: function () {
        this.reset();  
        for (let i = 0; i < this.slotsAmount; i++) {
            this.slots.push(this.getRandomSymbol());  
        }
        console.log("Slots:", this.slots); 
        this.calculateStatus(); 
    },

    win: false  
};