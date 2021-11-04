import { useState, useContext} from 'react';
import { OrderContext } from '../../context/order';
import styles from './ButtonOption.module.css'

export function ButtonOption(props: any){

    const {finalOrder,setFinalOrder,setIsdisable} = useContext(OrderContext);
        
    const [toogle, setToogle] = useState<number>();

    function selectOption(option: string | object, id: number) {

        const arrayHolder = finalOrder;

        const checkToogle = (arrayPos:number)=>{
            if(toogle === id){
                arrayHolder[arrayPos] = {price:0};
                setToogle(undefined)
             }
            else{
                arrayHolder[arrayPos] = option;
                setToogle(id)
             } 
             setIsdisable(!((Object.keys(finalOrder[0]).length===2)
                           &&Object.keys(finalOrder[1]).length===4))
        }

        if(props.IsfinishedFlavor)
            checkToogle(2);
        else          
            (Object.keys(option).length===2 ? checkToogle(0) : checkToogle(1))
      
        setFinalOrder(arrayHolder);
        
    }

    return(
        <div className={styles.buttonWrapper}>
                        {props.options?.map((options:any) => {
                            return (
                                <button
                                    type="button"
                                    key={options.id}
                                    onClick={() => selectOption(options, options.id)}
                                    className={`${styles.acaiOptions} 
                                    ${(toogle === options.id) ? styles.acaiOptionsClicked : null}`}> 
                                    {options.text}</button>
                            )
                        })}
        </div>
    )
}