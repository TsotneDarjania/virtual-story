
    export function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export function randomFloatInRange(min, max) {
         return Math.random() * (max - min) + min;
    };

    export function pickRandom(array){
        return array[randomNumberInRange(0,array.length-1)]
    }
