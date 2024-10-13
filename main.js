let fruites = ["apple", "banana", "orange", "mango", "grape"];
let animals = ["elephant", "giraffe", "dolphin", "kangaroo", "penguin"];
let countries = ["brazil", "canada", "japan", "kenya", "france"];
let movies = ["titanic", "inception", "gladiator", "avatar", "matrix"];
let sports = ["football", "basketball", "tennis", "baseball", "cricket"];

let category = [fruites, animals, countries, movies, sports];
let categorysec = ["fruites", "animals", "countries", "movies", "sports"];

// Choose the category and the word
let categorySelect = category[Math.floor(Math.random() * 5)];
let wordSelect = categorySelect[Math.floor(Math.random() * 5)]
// word into array
let wordArray = Array.from(wordSelect);
console.log(wordSelect);
console.log(wordArray);

// console.log(categorysec[category.indexOf(categorySelect)]);
let cattext = document.createTextNode(categorysec[category.indexOf(categorySelect)]);
document.querySelector(".game-info .category span").appendChild(cattext);


let rightGuess = document.querySelector(".container .right-guess");
console.log(rightGuess)
// create a number of spans equal to the word length 
for(let i = 0; i < wordArray.length; i++) {
    let rightLetter = document.createElement("span");
    rightGuess.appendChild(rightLetter);
}


let letters = document.querySelectorAll(".container .right-guess span");
console.log(letters)

let rightCounter = 0;
let wrongCounter = 0;


document.addEventListener("click", (e) => {
    let theStatus = false;
    if(e.target.className  === "letter-box") {
        e.target.style.opacity = .3;
        wordArray.forEach((wLetter, index) => {
            if(e.target.innerHTML.toLowerCase() === wLetter) {
                theStatus = true;
                rightCounter++;
                letters[index].innerHTML = wLetter;
            }
        })
        if(rightCounter === wordArray.length) {
            disableAll();
            let winMsg = document.createElement("div");
            winMsg.classList.add("win");
            let msg = document.createTextNode(`Congratulations`);
            winMsg.appendChild(msg);
            document.body.appendChild(winMsg);
        }
        if(theStatus === false) {
            wrongCounter++;
            console.log(wrongCounter);
            if(wrongCounter === 1) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-1");
                console.log(theDraw);
            }
            if(wrongCounter === 2) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-2");
                console.log(theDraw);
            }
            if(wrongCounter === 3) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-3");
                console.log(theDraw);
            }
            if(wrongCounter === 4) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-4");
                console.log(theDraw);
            }
            if(wrongCounter === 5) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-5");
                console.log(theDraw);
            }
            if(wrongCounter === 6) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-6");
                console.log(theDraw);
            }
            if(wrongCounter === 7) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-7");
                console.log(theDraw);
            }
            if(wrongCounter === 8) {
                let theDraw = document.querySelector(".hangman-draw");
                theDraw.classList.add("wrong-8");
                console.log(theDraw);

                disableAll();
                let lostMsg = document.createElement("div");
                lostMsg.classList.add("lost");
                let msg = document.createTextNode(`You Lost The Right Answer Is: ${wordSelect}`);
                lostMsg.appendChild(msg);
                document.body.appendChild(lostMsg);
            }
        }
        
    }
})

function disableAll() {
    document.querySelectorAll(".container .play .letters span").forEach(span => {
        span.style.cssText = `pointer-events: none; opacity: .5;`
    })
}