import React, { useState, createContext } from "react";

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
    const [pokemonInput, setPokemonInput] = useState("");

    return (
        <PokemonContext.Provider value={[pokemonInput, setPokemonInput]}>
            {children}
        </PokemonContext.Provider>
    );
}
