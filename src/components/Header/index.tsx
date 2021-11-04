import styles from "./header.module.css"

export function Header(){
    return (
        <div className={styles.contentWrapper}>
           <img src="/logo_acai.png" alt="Logo Açai"/>
           <h1> Retornar Açai</h1>
        </div>
    )
}