export type Countries = {}[];

export type CountryProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: { svg: string; png: string };
};

export type FormInput = string;

export type ContextType = {
  countries: {}[];
  isLoading: boolean;
};
