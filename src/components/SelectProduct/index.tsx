import { useEffect, useState, useContext } from 'react'
import { ButtonOption } from '../ButtonOptions';
import { api } from '../../services/api';
import styles from './SelectProduct.module.css'

import {OrderContext} from "../../context/order"

interface Sizes {
    id: number,
    text: string,
    price: number,
    time: number,
}

interface Customization{
    id:    number,
    text: string,
    price: number,
}

type Options = {
    AddonsOptions: Customization[],
    FlavorsOptions: Customization[],
    SizesOptions: Sizes[],
}

export function SelectProduct() {

    const {setOrderFinished,isDisable} = useContext(OrderContext);

    const [IsfinishedFlavor, setIsFinishedFlavor] = useState(false);
    const [options, setOptions] = useState<Options>();
    
    useEffect(() => {
        api.get<Options[]>("options").then(response => {
            const [Options] = response.data;
            setOptions(Options); 
        })
    }, [])

    return (
        <>
            {!IsfinishedFlavor ? (
                <section className={styles.content}>
                    <h1>Escolha seu açai</h1>
                    <h3>SABOR:</h3>
                    <ButtonOption 
                        options={options?.FlavorsOptions}
                        IsfinishedFlavor={IsfinishedFlavor}
                    />
                    <h3>TAMANHO:</h3>
                    <ButtonOption 
                        options={options?.SizesOptions}
                        IsfinishedFlavor={IsfinishedFlavor}
                    />
                    <br />
                    <button
                        onClick={() => setIsFinishedFlavor(!IsfinishedFlavor)}
                        className={styles.nextButton}
                        disabled={isDisable} >
                        Avançar</button>
                </section>
            ) :
                (
                <section className={styles.content}>
                    <h1>Personalize seu açai</h1>
                    <h3>PERSONALIZAÇÃO:</h3>
                    <ButtonOption 
                        options={options?.AddonsOptions}
                        IsfinishedFlavor={IsfinishedFlavor}
                    />
                    <br />
                    <button
                        onClick={() => setOrderFinished(true)}
                        className={styles.nextButton}>
                        Finalizar Pedido</button>
                </section>
                )}
        </>
    )
}
