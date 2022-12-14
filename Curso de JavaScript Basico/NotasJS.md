# JavaScript Básico

**Lenguaje de programacion interpretado**

Es un lenguaje originalmente creado para ser ejecutado en los navegadores web.


### NodeJS

Es un entorno en tiempo de ejecucion multiplatadforma que permite que JavaScript sea ejecutado en un celular, una PC, etc.


### NPM

__Node Package Manager__

Gestiona los modulos que tiene NodeJS


## Proyectos en NodeJS (NPM)

- iniciar un proyecto en NodeJS, el sigiente comando crea el package.json con los datos del proyecto:
```cmd
npm init
```

- Dentro del package.json podemos insertar los scripts y para ejecutarlos usamos el comando:

```
npm run nombreScript
```

### Tipado en JS

Tipado Inferido

###### Tipos en JS

__Primitivos:__ Number, String, Boolean, Null, Undefined


## Sets y Objetos

#### Sets

Los **sets** son como arreglos pero con la diferencia de que no permiten tener valores repetidos.

```JavaScript
// arreglo
const array = (1, 2, 3, "hola", {id: 10}, 2, "hola")

// set
const set = new Set(array)
// obtenemos: {1, 2, 3, "hola", {id: 10}}
```


#### Objetos

Los **objetos** permiten almacenar datos asociados a una `clave`

```JavaScript
const objeto = {
    clave: "valor1",
    clave_2: 2,
    "clave-3": true
}
```

Para acceder a los valores de un objeto tenemos las siguentes formas:

```JavaScript
objeto.clave
// o
objeto["clave-3"]
```

Para copiar o dublicar un objeto no basta igualarlos (objeto2 = objeto1), ya que de esta manera estaremos copiando la direccion de memoria y los cambios hechos en el objeto2 tambien se veran reflejados en el objeto1. asi que, para duplicarlo debemos usar el factor de propagación.

```JavaScript
// Forma incorrecta
const objeto2 = objeto1

//Forma correcta
const objeto2 = {...objeto1}
```


#### Fechas

Las **fechas** son objetos que contienen el dia de la semana, el nombre del mes, el dia, el numero del mes, el año, la hora, los minutos, los milisegundos y la zona horaria.

para obtener la fecha actual usamos:
```JavaScript
const fecha = new Date()
```



### Consola

Para pedir datos al usuario podemos usar:

```
prompt("Escribe un dato:")
```

Esto mandara un mensaje al usuario con la ´posibilidad de escribir algo y mandarlo o guardarlo en una variable.



## Funciones

Sirven para crear bloques de codigo cin una utilizacion especifica, por ejemplo:

```JavaScript
function nombreFuncion(parametro1, parametro2, ..., parametroN) {
    // cuerpo de la funcion
    return // el resultado que se obtiene con la funcion
}
```

para invocar a una funcion se hace de la siguiente manera:

```JavaScript
nombreFuncion("parametro") // entre parentecis le pasas los parametros
```


#### Funciones tipo flecha

```JavaScript
// declaracion:
const variable = parametro => // codigo de la funcion

// invocacion:
variable("parametros")
```

#### Carga y sobrecarga de funciones

**Carga:** cuando una funcion llama a otra funcion.
```JavaScript
function primeraFuncion(parametro) {
    segundaFuncion("parametro")
}

function segundaFuncion(parametro) {
    // codigo de la segunda funcion
}
```

**Sobrecarga:** cuando una funcion se llama a si misma (sin poder parar).
```JavaScript
function otraFuncion(parametro) {
    otraFuncion("parametro")
}
```


#### Funciones asincronas y promesas

Las **funciones asincronas** son funciones que pueden no ejecutarse segun la promesa definida.

Una **promesa** es una funcion que evalua si si cumple o no una condicion, misma que indicará si la funcion asincrona se ejecuta o no.

```JavaScript
function funAsincrona() {
    // normalmente llama a una base de datos externa
    // puede generar algun error
}

const promesa = new Promise((resolve, reject) => {
    if(condicion) {
        resolve()
    } else {
        reject()
    }
})
```


#### Funciones generadoras

Las fun ciones generadoras tienen una sintaxis similar a las funciones normales, pero a estas se le agrega un asterisco despues de la palabra reservada function:
```JavaScript
function* generadora(){
    //codigo
}
```

Este tipo de funciones nos sirve para generar datos continuos cada vez que se invoca.


## Errores

Los errores más comunes en JavaScript:

    - InternalError
    - SyntaxError
    - TypeError
    - RangeError
    - ReferenceError

JavaScript nos permite gestionar errores generando un error personalizado con la palabra reservada **throw** y usando **try** y **catch**

```JavaScript
const funcion = valor => {
    if(condicionQuePuedaGenerarError){
        // si no hay error se ejecuta
        return
    }
    // si hay error lanzamos:
    throw new Error("No se cumplio la condicion")
}

// Try Catch

try { // intenta
    // ponemos el codigo que podria generar error
} catch (e) {
    // en caso de existir error en Try, se ejecuta catch
    console.error(e) // en -e- se guarda la informacion del error que se presenta
}
```


## Gestion de Logs en NodeJS

Para la gestion de logs usaremos la libreria [winston](https://www.npmjs.com/package/winston).

Primero debemos instalarlo en la misma carpeta donde hayamos iniciado nuestro proyecto de NodeJS, para instalarlo ejecutams desde la treminal:
```
npm i winston
```

Al instalarlo nos creara una carpeta con todos los modulos necesarios para gestionar nuestro proyecto.



## **ESLint**

ESLint es una libreria que nos permite declarar "reglas" par tener una mejor consistencia programando con JavaScript; estas reglas pueden ser: usar siempre comillas dobles, no usar punto y coma, tipo de declaracion de variables, etcetera.

Estas reglas se definen un archivo nombrado __.eslintrc.*__ (el asterisco indica diferentes tipos de archivos aceptados: .json, .js, etc...)

Para crear estas reglas debemos estar en un proyecto _npm_ e instalar ESLint en el proyecto:

```powershell
npm i -D eslint
```

Despues debemos iniciar la configuracion:

```powershell
npm init @eslint/config
```

Una vez configuradas las reglas, podemos agregar algunos scripts en el _package.json_ del proyecto para que nos lanse los errores existentes y los arregle automaticamente:

```JSON
"scripts": {
    "lint": "eslint .",
    "lint-fix": "eslint --fix ."
  }
```