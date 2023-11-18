import styles from './price.module.scss'

interface Price{
  price: number;
}

const Price = ({ price }:Price) => {
  return (
    <div className={styles.price}>{price} ₽</div>
  )
}

export default Price