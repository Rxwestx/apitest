import axios from 'axios';

const  instance  =  axios.create ({
     baseURL : 'https://pokeapi.co/api/v2/pokemon/', 
     timeout:1000 
    });

    // instance
    export  const getPokemonData = async ( pokemonName )  =>  {
        try {
            const response = await instance.get(pokemonName);
            return response.data;
        } catch (error) {
            console.error(error);
            alert("Pokemon not found") ;
        }
    }