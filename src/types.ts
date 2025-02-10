export type CountryProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  altSpellings: string[];
  flag: string;
  flags: { svg: string; png: string };
  topLevelDomain: string[];
  currencies: { name: string; code: string; symbol: string }[];
  languages: {}[];
  borders: string[];
  cioc: string;
  alpha2Code: string;
  alpha3Code: string;
  subregion: string;
  translations: {};
  regionalBlocs: {}[];
  independent: boolean;
  callingCodes: string[];
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  nativeName: string;
  numericCode: string;
};

export type Countries = CountryProps[];

export type ContextType = {
  countries: Countries;
  isLoading: boolean;
};

export type FormInput = string;
