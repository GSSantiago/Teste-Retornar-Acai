import React, { createContext, ReactNode, useContext, useState } from "react";

type teste = {
    id: number,
    text: string,
    price?: number,
    time?: number,
}

type FinalOrder ={
    id: number,
    text: string,
    price?: number,
    time?: number,
}

type OrderContextData = {
  isOrderFinished: boolean,
  setOrderFinished: (value : boolean)=> void,
  finalOrder: any,
  setFinalOrder:(value: ({})[]) => void,
  isDisable: boolean,
  setIsdisable: (value: boolean)=> void

}
//(FinalOrder)[]

export const OrderContext = createContext({} as OrderContextData);

type OrderProvider = {
    children: ReactNode;
   }

export default function OrderProvider(props: OrderProvider){

    const [isOrderFinished, setOrderFinished] = useState(false);
    const [finalOrder, setFinalOrder] = useState([{}, {}, {price:0}]);
    const [isDisable , setIsdisable] = useState(true);

    return(
        <OrderContext.Provider value={{
            isOrderFinished,
            setOrderFinished,
            finalOrder,
            setFinalOrder,
            isDisable,
            setIsdisable,
        }}>
           {props.children}
        </OrderContext.Provider>
    )
}