
import styles from './card.module.css';


export const card = () => {
  return (
    <>
     <div className={styles.card}>
                  <img width={100} src={props.image} alt={props.tec} />
                  <h3>{props.tec}</h3>
                  <p>{props.text}</p>
                </div>
    </>
  )
}