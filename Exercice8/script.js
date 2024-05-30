function add(num1, num2) {
    // Convertit les entrées en nombres flottants en cas de chaînes de caractères 
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    return number1 + number2;
}

 export default add;
