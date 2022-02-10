import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ICountry, DropdownData } from './models/country';
import { selCountry, selRegion } from './Store/actions/country.actions';

import { State } from './Store/reducers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
title: any;
constructor( private store:Store<State>,private changeDetectorRef: ChangeDetectorRef){}
regions = [{
  label: 'Europe',
  value: {
    name: 'europe'
  }
}, {
  label: 'Asia',
  value: {
    name: 'asia'
  }
}];
countries: DropdownData[]=[];
countryDetails?: ICountry[];
selectedCountry: ICountry | undefined;

ngOnInit(): void {
 
}

getSelectedRegion(selectedRegion:ICountry) {

 
 this.countryDetails = undefined;
 this.selectedCountry = undefined;
 this.store.dispatch(selRegion(selectedRegion['name']));
 this.store.select(state => state.countrylist)
 .subscribe(res=>{ 
  this.changeDetectorRef.detectChanges();
  this.countryDetails = res.selectedCountry;
  this.countries.length = 0;
    this.countryDetails.forEach(country =>{
      this.countries.push({label:country.name,value:country})
    });
});
}
getSelectedCountry(selectedCountry: ICountry) {
  this.selectedCountry = selectedCountry;
  this.store.dispatch((selCountry(this.selectedCountry)));

}
}


