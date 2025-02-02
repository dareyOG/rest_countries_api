export type Country = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: { svg: string; png: string };
};

export type Countries = Country[];
