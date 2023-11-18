import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Menu from '@/assets/icons/menu.svg'
import CloseMenu from '@/assets/icons/close-menu.svg'
import styles from './navMenuButton.module.scss'

interface NavMenuButton{
    mobileMenuIsActive: boolean;
    setMobileMenuIsActive: Dispatch<SetStateAction<boolean>>;
}

const NavMenuButton = ({ mobileMenuIsActive, setMobileMenuIsActive }: NavMenuButton) => {
  return (
    <button className={styles.navMenuButton} onClick={() => setMobileMenuIsActive((prev) => !prev)}>
        {
        mobileMenuIsActive
        ?
        <Image src={CloseMenu} alt="Закрыть меню" width={30} height={25}/>
        :
        <Image src={Menu} alt="Меню" width={26} height={25}/>
        }
    </button>
  )
}

export default NavMenuButton