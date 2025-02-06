export type CountryProps = {
  name: { [key: string]: string };
  population: number;
  region: string;
  capital: string[];
  altSpellings: string[];
  flags: { [key: string]: string };
  tld: string[];
  currencies: { [key: string]: string };
  languages: { [key: string]: string };
  borders: string[];
  cca3: string;
  subregion: string;
};

export type Countries = CountryProps[];

export type ContextType = {
  countries: Countries;
  isLoading: boolean;
};

export type FormInput = string;
