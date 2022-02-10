import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { countryReducer, countryState } from './country.reducer';


export interface State {
countrylist:countryState
}

export const reducers: ActionReducerMap<State> = {
  countrylist: countryReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
