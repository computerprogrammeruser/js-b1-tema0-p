## 🗒️ Requisitos

Para realizar este ejercicio, deberás haber realizar los ejercicios anteriores del Tema 0, en concreto:

- ¿Qué es GitHub y cómo se usa?
- ¿Qué es un sistema de control de versiones? Instalación de Git
- ¿Qué es un IDE? Instalación del IDE (preferentemente Visual Studio Code)
- Instalación de NodeJS 


## 📝 Enunciado

> 💡 Este ejercicio deberás realizarlo en el fichero `src/tema0.js`. 

En este ejercicio deberás implementar la función `checkAge()`, la cual recibe como parámetro un valor numérico y devuelte `True` si el valor es igual o superior a 18. Encontrarás el esqueleto de la función en el fichero `src/tema0.js`.

Para ayudarte a su resolución, hemos preparado unos **tests** que comprobarán que tu solución es correcta. En la sección [Cómo ejecutar los tests](#cómo-ejecutar-los-tests) describimos cómo puedes ejecutar los tests.

Cuando hayas propuesto una implementación para la función, ejecuta los tests para ver si tu solución es correcta. Si no pasa los tests, vuelve a intentarlo revisando los errores que te comentan los tests.

Una vez termines el ejercicio, deberás enviar tus cambios para que se registren en la plataforma y que puedan ser corregidos por tu profesor. En la sección [Entregar ejercicio](#entregar-ejercicio) describimos cómo has de enviar tu solución al ejercicio.

## 🛠️ Cómo ejecutar los tests

Para lanzar los tests deberás ejecutar esta instrucción en el Terminal de tu editor (en Visual Studio Code el Terminal lo puedes abrir a través del menú View / Terminal y aparecerá en la parte inferior de la pantalla)

```
npm t
```

La instrucción anterior lanzará los tests cada vez que guardes el fichero `src/tema0.js`, que es precisamente donde implementarás los ejercicios de esta PEC.

Como puedes esperar, la primera vez que ejecutes `npm t` y se lancen los tests, si no has realizado el ejercicio, fallarán todos. Revisa el mensaje de error que se imprime para conocer su formato y entender cómo se notifican los errores.

Este es un ejemplo de una posible salida de error:

```
 FAIL  src/tema0.test.js
  pec
    checkAge:
      × should return true when age is bigger or equal than 18
```

Es importante fijarse en la descripción del error, por ejemplo, el texto de error anterior indica que para el ejercicio (relativo a la funcinón `checkAge`) la función debe devolver `true` si `age` es mayor o igial que 18. Esta indicación os ayuda a revisar el código para comprobar porqué el comportamiento no es el esperado.

Una vez corregido el problema, en cuanto se guarda el fichero donde estamos editando los ejercicios, el test se vuelve a lanzar y nos mostraría:

```
 PASS  src/tema0.js
  pec
    checkAge:
      √ should return true when age is bigger or equal than 18
```

Ahora el test muestra `PASS` y el caso de prueba que antes fallaba se muestra como correcto (con el carácter `√`).

El comando de pruebas (en el Terminal) tiene un menú (accesible mediante la tecla `w`) que os permite ejecutar los tests selectivamente. Por ejemplo, pulsando `a` podéis relanzar manualmente todos los tests; y pulsando `f` podéis relanzar solamente aquellos tests que han fallado. Probad las diferentes opciones y si tenéis alguna duda, consultadla en el foro de la asignatura.

## 📦 Entregar ejercicio

Para entregar el ejercicio, sigue estos pasos. Ten en cuenta que estos pasos están indicados para VSCode, el IDE que te recomendamos en la Escuela de Programación.

1. Guarda el fichero `src/tema0.js` pulsando CTRL+s

2. Abre la consola de git en tu ordenador ves al directorio donde se encuentra el archivo tema0.js y en ella ejecuta:

```
git add tema0.js
git commit -m "Submitting exercise"
git push
```

