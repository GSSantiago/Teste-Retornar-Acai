import { useEffect,useContext } from 'react';
import { api } from '../../services/api';
import { OrderContext } from '../../context/order';
import styles from './ResumeProduct.module.css'


export function ResumeProduct(){

    const {finalOrder,setFinalOrder,setOrderFinished,setIsdisable} = useContext(OrderContext);

    const finalValue= finalOrder[1].price + finalOrder[2].price;

    useEffect(()=>{
        api.post('order', finalOrder)
    }, [])       

    return(
        <section className={styles.content}>
            <h1>Resumo do Pedido</h1>
            <h3>TAMANHO:</h3>
            <div className={styles.acaiOptionsWrapper}>
                <p>- {finalOrder[1].text}</p>
                <p>R$ {finalOrder[1].price.toFixed(2)}</p>
            </div>
            <h3>SABOR:</h3>
            <div className={styles.acaiOptionsWrapper}>
                <p>- {finalOrder[0].text}</p>
                <p>R$0,00</p>
            </div>
            <h3>PERSONALIZAÇÕES</h3>
            <div className={styles.acaiOptionsWrapper}>
                <p>- {finalOrder[2].text}</p>
                <p>R$ {finalOrder[2].price.toFixed(2)}</p>
            </div>
            <p className={styles.valuesOrder}>
            Valor total: R${finalValue.toFixed(2)}<br/>
            Tempo de preparo: {finalOrder[1].time}min
            </p>
            
            <br/>
            <button 
            onClick={()=>{
                setFinalOrder([{}, {}, {price:0}]);
                setIsdisable(true)
                setOrderFinished(false)
            }} 
            className={styles.nextButton}>Refazer Pedido</button>
            </section>
      ) 
}

