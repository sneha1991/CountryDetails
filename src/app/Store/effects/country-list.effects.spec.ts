import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CountryListEffects } from './country-list.effects';

describe('CountryListEffects', () => {
  let actions$: Observable<any>;
  let effects: CountryListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountryListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CountryListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
