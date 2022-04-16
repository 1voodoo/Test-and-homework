import axios from "axios";

export interface ICurrency {
    date: string;
    base: string;
    rates: {
        EUR: string;
        USD: string;
        JPY: string;
        BGN: string;
        CZK: string;
        DKK: string;
        GBP: string;
        HUF: string;
        PLN: string;
        RON: string;
        SEK: string;
        CHF: string;
        ISK: string;
        NOK: string;
        HRK: string;
        TRY: string;
        AUD: string;
        BRL: string;
        CAD: string;
        CNY: string;
        HKD: string;
        IDR: string;
        ILS: string;
        INR: string;
        KRW: string;
        MXN: string;
        MYR: string;
        NZD: string;
        PHP: string;
        SGD: string;
        THB: string;
        ZAR: string;
    }
}

const getApiCurrency = async(): Promise<ICurrency> =>  {
    try {
        const respoonse = await axios.get('https://api.vatcomply.com/rates?base=USD');
        return respoonse.data
    } catch (error) {
        alert(error);
        throw(error);
    }
    
};

export default getApiCurrency;