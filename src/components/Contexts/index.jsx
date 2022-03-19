import React, { useState, createContext } from "react";

export const PokemonInputContext = createContext();
export function PokemonInputProvider({ children }) {
    const [pokemonInput, setPokemonInput] = useState("");

    return (
        <PokemonInputContext.Provider value={[pokemonInput, setPokemonInput]}>
            {children}
        </PokemonInputContext.Provider>
    );
}

export const PokemonContext = createContext();
export function PokemonProvider({ children }) {
    const [pokemonResult, setPokemonResult] = useState("");

    return (
        <PokemonContext.Provider value={[pokemonResult, setPokemonResult]}>
            {children}
        </PokemonContext.Provider>
    );
}
