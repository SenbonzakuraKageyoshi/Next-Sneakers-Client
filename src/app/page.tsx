import Search from "@/components/Search/Search"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import styles from './homepage.module.scss'
import ProductCard from "@/components/ProductCard/ProductCard"

const Homepage = () => {
  return (
    <section className="catalog">
      <div className={styles.catalogTop}>
        <SectionTitle title="Все кроссовки"/>
        <Search/>
      </div>
      <ul className={styles.catalogList}>
        <li>
          <ProductCard/>
        </li>
        <li>
          <ProductCard/>
        </li>
        <li>
          <ProductCard/>
        </li>
        <li>
          <ProductCard/>
        </li>
        <li>
          <ProductCard/>
        </li>
        <li>
          <ProductCard/>
        </li>
        <li>
          <ProductCard/>
        </li>
        <li>
          <ProductCard/>
        </li>
      </ul>
    </section>
  )
}

export default Homepage