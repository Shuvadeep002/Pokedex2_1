import { Keyboard } from "react-native";
import { APIConstants } from "../assets/StaticText";
import { doGetApiCall, doPostApiCall } from "../utils/ApiServices";
import { store } from "../reduxStoreAndSlice/store";


/**
 * Makes a GET request to the specified endpoint.
 *
 * @param {string} endPoint - The API endpoint.
 * @param {number} [page] - The page number for pagination (optional).
 * @returns {Promise<any>} - A promise that resolves to the API response.
 */
export const getResponse = (endPoint: string, page?: number) => {
    let Endpoint = page ? `${endPoint}?offset=${page}&limit=20` : endPoint
    return new Promise(async function (resolve, reject) {
        doGetApiCall({
            BASE_URL: APIConstants.BASE_URL,
            endpoint: Endpoint,
        }).then((response: any) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

/**
 * Makes a POST request to the specified endpoint.
 *
 * @param {string} endPoint - The API endpoint.
 * @param {any} body - The request body.
 * @returns {Promise<any>} - A promise that resolves to the API response if successful, rejects otherwise.
 */
export const postResponse = (endPoint: string, body: any) => {
    return new Promise(async function (resolve, reject) {
        doPostApiCall({
            BASE_URL: APIConstants.BASE_URL,
            endpoint: `${endPoint}`,
            body: body
        }).then((response: any) => {
            if (response.message == "Success") {
                resolve(response)
            }
            else {
                reject(response)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}


/**
 * Fetches the list of Pokémon types.
 *
 * @returns {Promise<any>} - A promise that resolves to the list of Pokémon types.
 */
export const getPokemonTypes = () => {
    return new Promise(async function (resolve, reject) {
        doGetApiCall({
            BASE_URL: APIConstants.BASE_URL,
            endpoint: APIConstants.POKEMON_TYPE,
        }).then((response: any) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}


/**
 * Formats a Pokémon name by capitalizing the first letter of each word.
 *
 * @param {string} [name] - The original Pokémon name.
 * @returns {string | undefined} - The formatted Pokémon name.
 */
export const getPokemonName = (name?: string) => {
    let nameArr = name?.split("-")
    let result = nameArr?.map((item) => `${item?.[0]?.toUpperCase()}${item?.slice(1)}`).join(" ")
    return result;
}

// export const getPokemonList = (limit: number) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response: any = await getResponse(APIConstants.POKEMON, limit);

//             const detailedPokemon = await Promise.all(
//                 response.results.map(async (poke: any) => {
//                     const singleResponse = await fetch(poke.url, { method: "GET" });
//                     const details = await singleResponse.json();
//                     return details;
//                 })
//             );

//             resolve(detailedPokemon);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
// export const getPokemonList = async (limit: number) => {

//     return new Promise(async function (resolve,reject) {

//     })
//     try {
//         const response: any = await getResponse(APIConstants.POKEMON, limit);
//         const pokemonUrls = response.results.map((poke: any) => poke.url);

//         // Fetch Pokémon details in chunks to improve performance
//         const chunkSize = 10; // Adjust as needed
//         const detailedPokemon = [];

//         for (let i = 0; i < pokemonUrls.length; i += chunkSize) {
//             const chunk = pokemonUrls.slice(i, i + chunkSize);
//             const promises = chunk.map(url => fetch(url).then(res => res.json()));
//             const results = await Promise.all(promises);
//             detailedPokemon.push(...results);
//         }

//         return detailedPokemon;
//     } catch (error) {
//         throw error;
//     }
// };


/**
 * Fetches the details of a specific Pokémon.
 */
export const GetPokemonDetails = () => {

}


/**
 * Checks if a given Pokémon is in the user's favorites.
 *
 * @param {any} data - The Pokémon data.
 * @returns {boolean} - Returns true if the Pokémon is a favorite, false otherwise.
 */
export const IsFavorite = (data: any) => {
    const state = store.getState();
    const favoriteList = state.pokemonData.favoritePokemonList
    if (favoriteList?.length > 0) {
        return favoriteList?.some((item) => item.id == data.id)
    }
    else {
        return false
    }
}
