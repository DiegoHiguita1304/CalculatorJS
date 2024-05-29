# Calculadora JavaScript
Esta calculadora multifuncional permite al usuario seleccionar entre diferentes tipos de cálculos (simple, científico y especial) realiza las operaciones correspondientes según la opción seleccionada.

## Funciones

1. Función promptUser(query): Esta función toma un mensaje (query) como entrada y muestra un cuadro de diálogo de entrada de texto al usuario, donde el usuario puede escribir su respuesta. Luego, devuelve la respuesta ingresada por el usuario.

2. Función main(): Esta es la función principal del programa. 
 Realiza lo siguiente:

* Muestra un mensaje de bienvenida utilizando alert().
Establece una variable continueCalculating en true, que controla si el bucle principal debe continuar ejecutándose.

* Inicia un bucle while que se ejecuta mientras continueCalculating sea true.

* Dentro del bucle, muestra un menú de opciones al usuario para seleccionar el tipo de calculadora.
Llama a la función correspondiente según la opción seleccionada por el usuario
- SimpleCalculator 
- ScientificCalculator
- SpecialCalculator.

* Pregunta al usuario si desea realizar otra operación y actualiza continueCalculating en función de la respuesta,
el bucle se repite si el usuario desea realizar otra operación.

* Al salir del bucle, muestra un mensaje de despedida utilizando alert().

3.  Funciones de calculadora (simpleCalculator, scientificCalculator, specialCalculator): Estas funciones realizan cálculos específicos según el tipo de calculadora seleccionado por el usuario. Aquí está el funcionamiento de cada una:

* SimpleCalculator:
Solicita al usuario dos números y un operador (+, -, *, /).
Realiza la operación matemática correspondiente y muestra el resultado en consola.

* ScientificCalculator:
 Solicita al usuario un número y una operación (Seno, Coseno, Tangente, Logaritmo, potenciación, radicación ó Operaciones simples).
Para operaciones científicas, utiliza las funciones matemáticas de JavaScript (Math.sin, Math.cos, Math.tan, Math.log, Math.pow, Math.sqrt).
 Si elige Operaciones simples, llama a simpleCalculator() para realizar operaciones básicas.

* SpecialCalculator:
Solicita al usuario que seleccione una figura (Triángulo, Cuadrado, Rectángulo).
Según la figura seleccionada, solicita las dimensiones necesarias (base, altura, lado, largo, ancho).
Calcula el área y el perímetro de la figura seleccionada y muestra los resultados en consola.

## Función Contadores (Para realizar un seguimiento del número de veces que se ejecuta cada operación)

* Se define variables contadoras para cada operación dentro de las funciones de calculadora.
* Incrementa el contador correspondiente cada vez que se llama a la función de calculadora específica.
* Al final de la aplicación, muestra el recuento de cada operación.

## Clonación (Repositorio github)

1. En la pagina de GitHub ingresar al repositorio CalculadoraJS. 
2. En la parte de <>Code le das en HTTPS, copias el link https://github.com/DiegoHiguita1304/CalculatorJS.git.
3. En la carpera que desees clonar el repositorio le das click derecho y seleccionas Open Git Bash here.
4. en la consola los comandos a ejecutar son los siguientes:
*  git init
*  git clone https://github.com/DiegoHiguita1304/CalculatorJS.git.
5. Abre el archivo (index.html) en tu navegador web.

  ## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, puedes hacerlo a través de pull requests. Asegúrate de seguir las pautas de contribución.

Autor Nombre: Diego Higuita
