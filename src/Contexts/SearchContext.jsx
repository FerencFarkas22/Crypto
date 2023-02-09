import React from "react";

export const SearchContextDefaults = {
    value: [],
    setValue: ()=>{}
 }
 export const SearchContext = React.createContext(SearchContextDefaults);