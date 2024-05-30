function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 18 && age < 65) { // Le test n'inclut pas les personnes de 65 ans (<= 65) comme indiqué dans les instructions
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

export default checkAge;
