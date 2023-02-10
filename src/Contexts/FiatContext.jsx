import React from "react";

export const FiatContextDefaults = {
    value: [],
    setValue: ()=>{}
}

export const FiatContext = React.createContext(FiatContextDefaults);