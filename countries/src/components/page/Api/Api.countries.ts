import axios from "axios";

export interface ICountries {
  name: {
    common: string
  }
  flags: {
    png: string
  }
  area: number;
  population : number;
  continents : {
    0: string
  }
  currencies: {
   
  };
};

const ApiCountries = async (): Promise<ICountries[]> => {
  try {
    const respons = await axios.get('https://restcountries.com/v3.1/all');
    return respons.data
  } catch (error) {
    throw(error)
  }
};

export default ApiCountries;