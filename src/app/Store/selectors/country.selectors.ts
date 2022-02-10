import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducers/country.reducer';

export const selectCountryState = createFeatureSelector<fromCustomer.countryState>(
  fromCustomer.countryFeatureKey,
);
export const selectCustomersDesc = createSelector(
  selectCountryState,
  (state: fromCustomer.countryState) => state.countryDetails);