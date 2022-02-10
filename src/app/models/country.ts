export interface ICountry {
     name: string;
     capital?: string;
     population?: number;
     currencies?:any;
     flag?: string;  
}
// export interface ICountry{
//     name?:String,
    // topLevelDomain?:string[],
    // alpha2Code?:String,
    // alpha3Code?:String,
    // callingCodes?:number[]
    // capital?:String,
    // altSpellings?:string[],
    // subregion?:String,
    // region?:String,
    // population?:String,
    // latlng?:number[],
    // demonym?:String,
    // area?:number,
    // timezones?:string[],
    // nativeName?:String,
    // numericCode?:number,
    // flags?:Object,
    // currencies?:currency[],
    // languages?:[Object],
    // translations?:Object
    // flag?:string,
    // regionalBlocs?:[Object],
    // independent?:boolean
//}
export interface Currency {
    name: string;  
}

export interface DropdownData {
  label?: string;
  value?: ICountry;
}

// export interface Val {
//   [name: string]: string;
// }
