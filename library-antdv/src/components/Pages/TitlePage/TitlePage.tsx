import { FC, useEffect, useState } from "react";
import getApiCurrency, { ICurrency } from "../../api/getApiCurrency";
import style from './TitlePage.module.scss';



const TitlePage: FC = () => {
    const [currency, setCurrency] = useState<ICurrency | null>(null);
    const [valueInput, setValueInput] = useState<string>('');
    const [btn, setBtn] = useState<string>('');
    const [arr, setArr] = useState<string[]>([]);
    // let copy = Object.assign([], arr);
    console.log(btn);
    console.log(arr);
    
    

    const handleOnAdd = () => {
        const lol = Object.entries(currency!.rates).map(item =>{
            if (item[0] === valueInput) {
                setBtn(item[0] + "  " + item[1]);
                setArr(previous => [item[0]+ "  " + item[1], ...previous])
                setValueInput('');
      
            }
        } )
        console.log(lol);
        
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {    
        setValueInput(event?.target.value)
    }

    const handleOnDelete = (item: string) => {
        setArr(previous => previous.filter(current => current !== item))
    }
    
    const getApi = async () => {
        const getRespons = await getApiCurrency();
        setCurrency(getRespons);
    }

    useEffect(() => {
        const save = JSON.parse(localStorage.getItem('arr') || '[]');
        getApi();
        setArr(save)
    },[]);

    useEffect(() => {
        localStorage.setItem('arr', JSON.stringify(arr))
    }, [arr]);
   
    return (<div className={style.page}>
                {currency && ( <>
                    <div className={style.container}>
                        <div className={style.haeder}>
                            <h1>Курс валют на {currency.date}</h1>
                            <h2>Валюта {currency.base}</h2>
                        </div>
                        <div>
                        {/* <p>{btn}<button className={style.btn}>delete</button></p> */}
                            <input  onChange={handleOnChange} type="text" value={valueInput} placeholder="Название валюты"/>
                            <button onClick={handleOnAdd}>Добавить</button>
                            {arr && (<div className={style.container1}>{arr.map(item => (
                                <p key={item}>{item}<button onClick={() => handleOnDelete(item)}>delete</button></p>
                            ))}</div>)}
                        </div>
                    </div>

                </>)}    
            
            </div>);
};

export default TitlePage;

function all(all: any): import("react").MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error("Function not implemented.");
}
