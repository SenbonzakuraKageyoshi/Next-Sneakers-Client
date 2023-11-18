import Image from 'next/image'
import styles from './productCard.module.scss'
import Product from '@/assets/images/product.png'
import Price from '../ProductPrice/Price'
import ProductActionButton from '../ProductActionButton/ProductActionButton'
import AddProduct from '@/assets/icons/addIcon.svg'

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
        <div className={styles.productCardImageWrapper}>
            <Image className={styles.productImage} src={Product} alt="Мужские Кроссовки Nike Air Max 270" width={133} height={112}/>
        </div>
        <h3 className={styles.productName}>Мужские Кроссовки Nike Air Max 270</h3>
        <div className={styles.productCardBottom}>
           <div className={styles.productPrice}>
                <span>ЦЕНА:</span>
                <Price price={12990}/>
           </div>
           <ProductActionButton>
            <Image src={AddProduct} alt="Добавить в корзину" width={11} height={11}/>
           </ProductActionButton>
        </div>
    </div>
  )
}

export default ProductCard