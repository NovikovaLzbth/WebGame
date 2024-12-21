const cat = document.getElementById("cat");
const cactus = document.getElementById("cactus");
const scoreInfo = document.getElementById("score-info");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (cat.classList != ("jump")) {
        cat.classList.add("jump")
        updateScore(score + 1);
    }
    setTimeout(function() {
        cat.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 130 && cactusLeft > 0 && catTop >= 150) {
        alert("GAME OVER")
        updateScore(score = 0);
    }
}, 10)

let score = 0;

function updateScore(newScore) {
    score = newScore;
    scoreInfo.textContent = score;
}



