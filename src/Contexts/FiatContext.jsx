import React from "react";

export const FiatContextDefaults = {
    value: {
        name: 'USD',
        rate: 1,
        symbol: '$'
    },
    setValue: ()=>{}
}

export const FiatContext = React.createContext(FiatContextDefaults);