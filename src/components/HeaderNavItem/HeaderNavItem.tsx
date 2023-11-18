import Link from 'next/link';
import Image from 'next/image';
import styles from './headerNavItem.module.scss'

interface HeaderNavItem{
    icon: string;
    linkName: string;
    href: string;
    children: React.ReactNode
}

const HeaderNavItem = ({ icon, linkName, href, children }: HeaderNavItem) => {
  return (
    <Link href={href} className={styles.headerNavItem}>
        <Image src={icon} width={18} height={18} alt={linkName}/>
        { children }
    </Link>
  )
}

export default HeaderNavItem