let simpleCalculatorCount = 0;
let scientificCalculatorCount = 0;
let specialCalculatorCount = 0;

function promptUser(query) {
    return prompt(query);
}

function main() {
    alert("¡Bienvenido a la Calculadora Multifuncional!");
    let continueCalculating = true;

    while (continueCalculating) {
        const type = promptUser("Seleccione el tipo de calculadora:\n1. Simple\n2. Científica\n3. Especial");

        if (type === '1') {
            simpleCalculator();
            simpleCalculatorCount++;
        } else if (type === '2') {
            scientificCalculator();
            scientificCalculatorCount++;
        } else if (type === '3') {
            specialCalculator();
            specialCalculatorCount++;
        } else {
            console.log("Opción no válida.");
            continue;
        }

        const continueResponse = promptUser("¿Desea realizar otra operación? \nsi\nno").toLowerCase();
        if (continueResponse !== 'si') {
            continueCalculating = false;
        }
    }

    alert("Gracias por usar la calculadora Multifuncional. ¡Hasta Pronto!");
    console.log(`Cantidad de veces que se ejecutó la calculadora simple: ${simpleCalculatorCount}`);
    console.log(`Cantidad de veces que se ejecutó la calculadora científica: ${scientificCalculatorCount}`);
    console.log(`Cantidad de veces que se ejecutó la calculadora especial: ${specialCalculatorCount}`);
}

function simpleCalculator() {
    const num1 = parseFloat(promptUser("Ingrese el primer número: "));
    const operator = promptUser("Ingrese el operador:\n+\n-\n*\n/");
    const num2 = parseFloat(promptUser("Ingrese el segundo número: "));

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Operador no válido.");
            return;
    }

    console.log(`Resultado: ${result}`);
}

function scientificCalculator() {
    const operation = prompt("Seleccione la operación:\n1. Seno\n2. Coseno\n3. Tangente\n4. Logaritmo\n5. Potenciación\n6. Radicación\n7. Operaciones simples");

    if (operation === '7') {
        simpleCalculator();
        return;
    }

    const num = parseFloat(prompt("Ingrese el número: "));

    let result;
    switch (operation) {
        case '1':
            result = Math.sin(toRadians(num));
            break;
        case '2':
            result = Math.cos(toRadians(num));
            break;
        case '3':
            result = Math.tan(toRadians(num));
            break;
        case '4':
            result = Math.log(num);
            break;
        case '5':
            const exponent = parseFloat(prompt("Ingrese el exponente: "));
            result = Math.pow(num, exponent);
            break;
        case '6':
            result = Math.sqrt(num);
            break;
        default:
            console.log("Operación no válida.");
            return;
    }

    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    console.log(`Resultado: ${result}`);
}

function specialCalculator() {
    const shape = promptUser("Seleccione la figura:\n1. Triángulo\n2. Cuadrado\n3. Rectángulo");

    let area, perimeter;

    switch (shape) {
        case '1':
            const base = parseFloat(promptUser("Ingrese la base del triángulo: "));
            const height = parseFloat(promptUser("Ingrese la altura del triángulo: "));
            const sideA = parseFloat(promptUser("Ingrese el primer lado del triángulo: "));
            const sideB = parseFloat(promptUser("Ingrese el segundo lado del triángulo: "));
            const sideC = parseFloat(promptUser("Ingrese el tercer lado del triángulo: "));
            area = 0.5 * base * height;
            perimeter = sideA + sideB + sideC;
            break;
        case '2':
            const side = parseFloat(promptUser("Ingrese el lado del cuadrado: "));
            area = side * side;
            perimeter = 4 * side;
            break;
        case '3':
            const length = parseFloat(promptUser("Ingrese el largo del rectángulo: "));
            const width = parseFloat(promptUser("Ingrese el ancho del rectángulo: "));
            area = length * width;
            perimeter = 2 * (length + width);
            break;
        default:
            console.log("Opción no válida.");
            return;
    }

    console.log(`Área: ${area}`);
    console.log(`Perímetro: ${perimeter}`);
}

// Iniciar la calculadora
main();
