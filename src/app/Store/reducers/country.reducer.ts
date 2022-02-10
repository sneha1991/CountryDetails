import { Action, createReducer, on } from '@ngrx/store';
import { ICountry } from 'src/app/models/country';
import * as CountryActions from '../actions/country.actions';

export const countryFeatureKey = 'country';

export interface countryState {
  selectedRegion:string,
  selectedCountry:Array<ICountry>,
  countryDetails:ICountry|undefined,
  loaded:boolean
}

export const initialState: countryState= {
  selectedRegion: '',
  selectedCountry: [],
  countryDetails: undefined,
  loaded: false,
  
};

export const countryReducer = createReducer(
  initialState,
  on (CountryActions.selRegion ,
    (state: countryState,{region}) =>{
    return {
        ...state,
        countryDetails: undefined,
        selectedRegion: region
    };
}),
on (CountryActions.loadCountrysSuccess ,(state,action) =>{
    return {
        ...state,
        selectedCountry: action.country, loaded: true
    }
}),
on (CountryActions.loadCountrysFailure ,(state) =>{
  return {
      ...state,
      loaded: false
  }
}),
on (CountryActions.selCountry ,(state,action) =>{
  return {
      ...state,
      countryDetails: action.countrydt
  }
}),
);



export function reducer(state: countryState | undefined, action: Action): any {
  return countryReducer(state, action);
};