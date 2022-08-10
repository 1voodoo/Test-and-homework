import React, { useEffect, useState } from 'react';
import { population } from '../../helperFunction/population';
import ApiCountries, { ICountries } from '../Api/Api.countries';
import style from './Home.module.scss';

const Home = () => {
  const [contries, setContries] = useState<ICountries[] | null>(null);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(true);
  const [massage, setMassage] = useState('Loading...');
  
  const getApi = async() => {
    try {
      const allContries = await ApiCountries();
      setContries(allContries);
    } catch (error) {
      console.log(error);
      setMassage('Server Broken (')
    }
  }
  const handleClick = (e: any) => {
    setName(e.target.textContent);
    setOpen(false)
  }

  const handleInputValue = () => {
    setOpen(true)
  }

  const filterContries = contries?.filter(country => {
    return country.name.common.toLowerCase().includes(name.toLowerCase())
  });

  useEffect(() => {
    getApi();
  }, []);

  return (<>
    {contries && (
      <div className={style.inputContaine}>
        <div className={style.inputContainerIn}>
          <input
          onClick={handleInputValue} 
          value={name} 
          onChange={(event?) => setName(event.target.value)} 
          placeholder='Choose countries' className={style.input} 
          type="text" 
          />
          <ul className={style.autoComplit}>
            {name && open ? 
              filterContries?.map(item => (
              <li onClick={handleClick} className={style.autoComplitItem}>{item.name.common}
                <span><img src={item.flags.png} alt="foto" /></span>
              </li>
              ))
            : null}
          </ul>
        </div>
      </div>
      )}
    <div className={style.home}>
      {!contries && (
        <div className={style.tittle}>{massage}</div>
      )}
       {contries &&  (
          filterContries!.sort().map((country, index) => (
          <div key={index} className={style.container}>
            <img src={country.flags.png} alt="flag" />
            <h1>{country.name.common}</h1>
            <div className={style.containerDiscriptiom}>
              <p><span>continents:</span> {country.continents[0]}</p>
              <p><span>population:</span> {population(country.population)}</p>
            </div>
          </div>
          ))
        )}
    </div>
    </>);
}

export default Home;
