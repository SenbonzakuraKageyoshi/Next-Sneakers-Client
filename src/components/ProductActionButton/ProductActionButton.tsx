import React from 'react'
import styles from './productActionButton.module.scss'

interface ProductActionButton{
    children: React.ReactNode
}

const ProductActionButton = ({ children }: ProductActionButton) => {
  return (
    <div className={styles.productActionButton}>
        { children }
    </div>
  )
}

export default ProductActionButton