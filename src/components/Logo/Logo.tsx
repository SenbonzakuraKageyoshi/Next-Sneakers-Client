import Image from "next/image"
import Link from "next/link"
import LogoIcon from '@/assets/logo/logo.svg'
import styles from './logo.module.scss'

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
        <Image src={LogoIcon} alt="Next Sneakers" width={40} height={40}/>
        <div className={styles.logoText}>
          <h5 className={styles.logoTitle}>NEXT SNEAKERS</h5>
          <div className={styles.logoSubtitle}>Магазин лучших кроссовок</div>
        </div>
    </Link>
  )
}

export default Logo