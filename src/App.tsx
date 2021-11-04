import { useContext } from 'react';
import { OrderContext } from './context/order';

import { Header } from './components/Header';
import { ResumeProduct } from './components/ResumeProduct';
import { SelectProduct } from './components/SelectProduct';
import { Footer } from './components/Footer';

import styles from './styles/home.module.css';

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


