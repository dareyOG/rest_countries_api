export type CountryProps = {
  name: { [key: string]: string };
  population: number;
  region: string;
  capital: string[];
  flags: { [key: string]: string };
  alt: string;
};

export type Countries = CountryProps[];

export type ContextType = {
  countries: Countries;
  isLoading: boolean;
};

export type FormInput = string;
