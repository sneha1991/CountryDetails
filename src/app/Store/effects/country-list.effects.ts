import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { CountryService } from '../../service/country.service';
import * as CountryActions from '../actions/country.actions';


@Injectable()
export class CountryListEffects {

  constructor(private countryService:CountryService,private actions$: Actions) {}
  loadCountryList$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CountryActions.selRegion),
    tap(() => console.log('effects working$', )),
    mergeMap((action) =>{
     return this.countryService
        .loadCountry(action.region) 
        .pipe(map((country) => CountryActions.loadCountrysSuccess({ country })),
        catchError((error) => of(CountryActions.loadCountrysFailure(error))),
        
        )
    })
  )
);
}
