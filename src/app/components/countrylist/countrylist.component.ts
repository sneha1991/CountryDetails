import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICountry } from '../../models/country';
import { State } from '../../Store/reducers';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  selectedCountry: ICountry | undefined;
  constructor(private store:Store<State>,private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  this.store.select(state => state.countrylist.countryDetails)
 .subscribe(res=>{ 
  this.changeDetectorRef.detectChanges();
  this.selectedCountry = res;
  })
}

}
