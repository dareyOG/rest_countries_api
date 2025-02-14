/* export type CountryProps = {
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
}; */

export type CountryProps = {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { common: string; official: string } };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: { name: string; symbol: string } };
  idd: {};
  capital: [];
  altSpellings: [];
  borders: [];
  region: string;
  subregion: string;
  postalCode: {};
  languages: {};
  translations: {};
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {};
  flag: string;
  gini: {};
  fifa: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  car: {};
  timezones: string[];
  continents: string[];
  flags: { png: string; svg: string };
  coatOfArms: { png: string; svg: string };
  startOfWeek: string;
  capitalInfo: { latlng: number[] };
};

export type Countries = CountryProps[];

export type ContextType = {
  countries: Countries;
  isLoading: boolean;
  isError: boolean;
  theme: string;
  handleToggleTheme: () => void;
};

export type FormInput = string;

export type ThemeProps = "light" | "dark";
