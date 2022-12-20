// tenemos que instalar la libreria que vamos a usar (npm install libreria)
// impoertar la libreria (sera por defecto)
import axios from 'axios';

// copiamos de la documentacion:
axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(function (response) {
        // handle success
        console.log("Todo Bien")
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("Error mi pana")
        console.log(error);
    })