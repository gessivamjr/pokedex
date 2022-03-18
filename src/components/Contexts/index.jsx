import React, { useState, createContext } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    const [pokemonInput, setPokemonInput] = useState("");

    return (
        <PokemonContext.Provider value={[pokemonInput, setPokemonInput]}>
            {children}
        </PokemonContext.Provider>
    );
}

export const ErrorContext = createContext();

export function ErrorProvider({ children }) {
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <ErrorContext.Provider value={[errorMessage, setErrorMessage]}>
            {children}
        </ErrorContext.Provider>
    );
}
