// Fonction pour calculer le total
function calculateTotal() {
    const totalRows = 3; // Le nombre de lignes avec des valeurs à additionner
    let sum = 0;

    for (let i = 1; i <= totalRows; i++) {
        const priceField = document.getElementById(t1_${i});
        const quantityField = document.getElementById(t2_${i});
        const resultField = document.getElementById(t3_${i});
        const price = parseFloat(priceField.value)  0;
        const quantity = parseFloat(quantityField.value)  0;
        const result = price * quantity;
        resultField.value = result;
        sum += result;
    }

    document.getElementById("result").value = sum;
}

// Réinitialiser les champs
document.getElementById("resetButton").addEventListener("click", () => {
    const inputFields = document.querySelectorAll(".t");
    inputFields.forEach(inputField => {
        inputField.value = "";
    });
    document.getElementById("result").value = "";
});

// Associer la fonction de calcul au bouton "Calculer"
document.getElementById("calculateButton").addEventListener("click", calculateTotal);