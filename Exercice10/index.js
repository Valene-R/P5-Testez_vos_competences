function printNumbers(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += i + " ";  // Ajoute chaque nombre à la chaîne suivie d'un espace
    }
    return result.trim();  // Supprime l'espace supplémentaire à la fin
}

export default printNumbers
