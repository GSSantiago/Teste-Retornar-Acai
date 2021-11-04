import { createContext, ReactNode, useState } from "react";

type OrderContextData = {
  isOrderFinished: boolean,
  setOrderFinished: (value : boolean)=> void,
  finalOrder: any,
  setFinalOrder:(value: ({})[]) => void,
  isDisable: boolean,
  setIsdisable: (value: boolean)=> void

}

export const OrderContext = createContext({} as OrderContextData);

type Orderprovider = {
    children: ReactNode;
   }

export function OrderProvider(props: Orderprovider){

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