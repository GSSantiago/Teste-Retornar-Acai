import { useState, useContext} from 'react';
import { OrderContext } from '../../context/order';
import styles from './ButtonOption.module.css'

export function ButtonOption(props: any){

    const {finalOrder,setFinalOrder,isDisable , setIsdisable} = useContext(OrderContext);
        
    const [toogle, setToogle] = useState<number>();

    function selectOption(option: string | object, id: number) {
      
        const arrayHolder = finalOrder;
        
        if(props.IsfinishedFlavor){
            if(toogle === id){
                setToogle(undefined)
                arrayHolder[2] = {};
             }
            else{
                arrayHolder[2] = option;
                setToogle(id);
             } 
            return
        }

        if(Object.keys(option).length===2){
            if(toogle === id){
                setToogle(undefined)
                arrayHolder[0] = {};
             }
            else{
                arrayHolder[0] = option;
                setToogle(id);
             } 
        }
        else{
            if(toogle === id){
                setToogle(undefined)
                arrayHolder[1] = {};
             }
             else{
                arrayHolder[1] = option;
                setToogle(id);
             }
        }
        
        setFinalOrder(arrayHolder);
        
        if(((Object.keys(finalOrder[0]).length===2) && Object.keys(finalOrder[1]).length===4)
          ||(Object.keys(finalOrder[0]).length===0) && Object.keys(finalOrder[1]).length===0){
                setIsdisable(!isDisable)}
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