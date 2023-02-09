import React from 'react';

export const FavoritesContextDefaults = {
    value: [],
    setValue: ()=>{}

}
export const FavoritesContext = React.createContext(FavoritesContextDefaults);