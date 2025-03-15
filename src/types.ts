export type RegionProps =
  | "africa"
  | "americas"
  | "asia"
  | "europe"
  | "oceania"
  | "all";

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
  idd: object;
  capital: [];
  altSpellings: [];
  borders: [];
  region: RegionProps;
  subregion: string;
  postalCode: object;
  languages: object;
  translations: object;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: object;
  flag: string;
  gini: object;
  fifa: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  car: object;
  timezones: string[];
  continents: string[];
  flags: { png: string; svg: string };
  coatOfArms: { png: string; svg: string };
  startOfWeek: string;
  capitalInfo: { latlng: number[] };
};

export type CountriesProps = CountryProps[];

export type ThemeProps = "light" | "dark";

export type CountriesContextType = {
  countries: CountriesProps;
  isLoading: boolean;
  isError: boolean;
  query: string;
  region: RegionProps;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setRegion: React.Dispatch<React.SetStateAction<RegionProps>>;
};

export type ThemeContextType = {
  theme: ThemeProps;
  handleToggleTheme: () => void;
};

export type PaginationProps = {
  countriesCount: number;
  sortedCountries: object[];
};
