import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './Store/reducers';
import { CountryListEffects } from './Store/effects/country-list.effects';
import { CountryService } from './service/country.service';
import {HttpClientModule} from '@angular/common/http';
import { CountrylistComponent } from './components/countrylist/countrylist.component';

@NgModule({
  declarations: [AppComponent, DropdownComponent, CountrylistComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    NoopAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    EffectsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CountryListEffects]),
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
