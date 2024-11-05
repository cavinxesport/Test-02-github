let count = 0; // Valeur initiale du compteur
const maxCount = 100;
const minCount = 0;

const countElement = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

// Fonction pour augmenter le compteur
increaseBtn.addEventListener("click", () => {
    if (count < maxCount) {
        count++;
        countElement.innerText = count;
    }
});

// Fonction pour diminuer le compteur
decreaseBtn.addEventListener("click", () => {
    if (count > minCount) {
        count--;
        countElement.innerText = count;
    }
});