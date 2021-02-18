export interface ICountry {
  continent: '';
  country: '';
  population: '';
  cases: {
    '1M_pop': number;
    active: number;
    critical: number;
    new: number;
    recovered: number;
    total: number
  };
  deaths: {
    new: number,
    '1M_pop': number,
    total: number
  };
  day: string;
  time: string;
}

