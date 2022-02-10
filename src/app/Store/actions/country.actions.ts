import { createAction, props } from '@ngrx/store';
import { ICountry, DropdownData } from 'src/app/models/country';

export const loadCountrys = createAction(
  '[Country] Load Countrys'
);

export const loadCountrysSuccess = createAction(
  '[Country] Load Countrys Success',
  props<{ country: ICountry[] }>()
);

export const loadCountrysFailure = createAction(
  '[Country] Load Countrys Failure',
  props<{ error: any }>()
);


export const selRegion = createAction('[country page] select region',
// props<{region:DropdownData}>()
(region: string) => ({region})
);
export const selCountry = createAction('[country page] select country',
(countrydt:ICountry) => ({countrydt})
);

