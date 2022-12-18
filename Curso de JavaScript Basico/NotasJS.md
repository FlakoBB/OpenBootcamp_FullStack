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