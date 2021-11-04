import { useContext } from 'react';
import { OrderContext } from './context/order';

import { ResumeProduct } from './components/ResumeProduct';
import { SelectProduct } from './components/SelectProduct';
import { Header } from './components/Header';

import styles from './styles/home.module.css';
import { Footer } from './components/Footer';



export function App() {
  
  const {isOrderFinished} = useContext(OrderContext);

  return (
    <>
    <Header/>
      <main className={styles.contentWrapper}>
        {isOrderFinished ? 
        <ResumeProduct/>
        :<SelectProduct/> }
      </main>
    <Footer/>
    </>
  );
}


